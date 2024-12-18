import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty()
  @IsNumber()
  customerId: number;
  @ApiProperty()
  @IsNumber()
  amount: number;
}

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {}
