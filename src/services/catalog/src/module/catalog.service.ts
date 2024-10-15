import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { DeepPartial, Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { CreateProductDto, UpdateProductDto } from './dto/product-dto';

@Injectable({ scope: Scope.REQUEST })
export class CatalogService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
    @Inject(REQUEST) private request: Request,
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
    const { name, price, quality } = data;
    const product = this.productRepository.create({ name, price, quality });
    return this.productRepository.save(product);
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) throw new NotFoundException('product not found');
    return product;
  }

  async updateProduct(data: UpdateProductDto, id: number) {
    const product = await this.findOne(id);

    const { name, price, quality } = data;
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
    if (quality && quality != product.quality) {
      updateObject['quality'] = quality;
      console.log('quality');
    }
    if (Object.keys(updateObject).length !== 0)
      await this.productRepository.update({ id }, updateObject);
    return 'update successfully';
  }
}
