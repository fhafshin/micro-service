import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber } from 'class-validator';
import { StatusPayment } from '../../common/enums/status-payment.enum';

export class CreateOrderDto {
  @ApiProperty()
  @IsNumber()
  customerId: number;
  @ApiProperty()
  @IsNumber()
  productId: number;
}

export class UpdateOrderDto {
  @ApiProperty({ enum: StatusPayment })
  @IsEnum(StatusPayment)
  status: StatusPayment;
}
