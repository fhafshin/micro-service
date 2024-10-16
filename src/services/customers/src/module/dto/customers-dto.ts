import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCustomersDto {
  @IsString()
  @ApiProperty()
  fullname: string;
  @IsString()
  @ApiProperty()
  address: string;
}

export class UpdateCustomersDto extends PartialType(CreateCustomersDto) {}
