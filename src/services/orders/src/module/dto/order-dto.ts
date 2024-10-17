import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNumberString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsNumberString()
  customerId: number;
  @ApiProperty()
  @IsNumberString()
  productId: number;
}
