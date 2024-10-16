import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomersEntity } from './entity/customers.entity';
import { DeepPartial, Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { CreateCustomersDto, UpdateCustomersDto } from './dto/customers-dto';
@Injectable({ scope: Scope.REQUEST })
export class CustomersService {
  constructor(
    @InjectRepository(CustomersEntity)
    private customersRepository: Repository<CustomersEntity>,
    @Inject(REQUEST) private request: Request,
  ) {}

  async findOne(id: number) {
    const customers = await this.customersRepository.findOneBy({ id });
    if (!customers) throw new NotFoundException('customers not found');
    return customers;
  }

  async findAll() {
    const customers = await this.customersRepository.find();
    if (!customers) throw new NotFoundException('customers not found');

    return customers;
  }

  async delete(id: number) {
    const customers = await this.findOne(id);
    this.customersRepository.remove(customers);
    return 'deleted successfully';
  }

  async create(data: CreateCustomersDto) {
    const { fullname, address } = data;

    const customers = this.customersRepository.create({ fullname, address });
    await this.customersRepository.save(customers);
    return 'created successfully';
  }

  async update(data: UpdateCustomersDto, id: number) {
    const { fullname, address } = data;
    const customers = await this.findOne(id);
    const updateObject: DeepPartial<UpdateCustomersDto> = {};
    if (fullname && fullname != customers.fullname)
      updateObject.fullname = fullname;
    if (address && address != customers.address) updateObject.address = address;

    if (Object.keys(updateObject).length !== 0)
      this.customersRepository.update({ id }, updateObject);

    return 'updated successfully';
  }
}
