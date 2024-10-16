import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreateCustomersDto, UpdateCustomersDto } from './dto/customers-dto';
import { SwaggerConsumes } from '../common/enums/swagger-consumes.enum';
@ApiTags('customers')
@Controller()
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get('find-one/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.findOne(id);
  }

  @Get('findAll')
  findAll() {
    return this.customersService.findAll();
  }
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  @Post('create-constomers')
  create(@Body() data: CreateCustomersDto) {
    return this.customersService.create(data);
  }

  @Delete('delete-customers/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.delete(id);
  }
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  @Patch('update-customers/:id')
  update(
    @Body() data: UpdateCustomersDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.customersService.update(data, id);
  }
}
