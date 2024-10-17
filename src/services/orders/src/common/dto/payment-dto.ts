import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty()
  @IsNumberString()
  customerId: number;
  @ApiProperty()
  @IsNumberString()
  amount: number;
}
