import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty()
  @IsNumberString()
  customerId: number;
  @ApiProperty()
  @IsNumberString()
  amount: number;
}

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {}
