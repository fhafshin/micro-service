import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  Scope,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { CreateProductDto, UpdateProductDto } from './dto/product-dto';
import { notifications } from '../messages';

@Injectable({ scope: Scope.REQUEST })
export class CatalogService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
    @Inject(REQUEST) private request: Request,
    private dataSource: DataSource,
  ) {}

  getHello() {
    return 'Hello World!!!!!';
  }

  async findAll() {
    const products = await this.productRepository.find();
    if (!products) throw new NotFoundException('list of products not found');
    return products;
  }

  async createProduct(data: CreateProductDto) {
    const { name, price, quantity } = data;
    const product = this.productRepository.create({ name, price, quantity });
    return this.productRepository.save(product);
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) throw new NotFoundException('product not found');
    return product;
  }

  async updateProduct(data: UpdateProductDto, id: number) {
    const product = await this.findOne(id);

    const { name, price, quantity } = data;
    console.log(id);
    const updateObject: DeepPartial<ProductEntity> = {};
    if (name && name !== product.name) {
      updateObject['name'] = name;
      console.log('name');
    }
    if (price && price != product.price) {
      updateObject['price'] = price;
      console.log('price');
    }
    if (quantity && quantity != product.quantity) {
      updateObject['quantity'] = quantity;
      console.log('quantity');
    }
    if (Object.keys(updateObject).length !== 0)
      await this.productRepository.update({ id }, updateObject);
    return 'update successfully';
  }

  async order(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    queryRunner.connect();
    await queryRunner.startTransaction();

    const product = await queryRunner.manager.findOneBy(ProductEntity, { id });
    if (!product) throw new NotFoundException('product not found');
    if (product.quantity < 1)
      throw new BadRequestException('product quantity not valid');

    product.quantity -= 1;
    await queryRunner.manager.save(product);
    await queryRunner.commitTransaction();
    await queryRunner.release();
    return product;
  }

  async restore(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    queryRunner.connect();
    await queryRunner.startTransaction();
    const product = await queryRunner.manager.findOneBy(ProductEntity, { id });
    product.quantity -= 1;
    queryRunner.manager.save(product);
    await queryRunner.commitTransaction();
    await queryRunner.release();
    return product;
  }

  async deleteProduct(id: number) {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
    return 'deleted successfully';
  }

  findAllMessages() {
    return notifications;
  }
}
