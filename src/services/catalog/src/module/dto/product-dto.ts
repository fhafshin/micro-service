import { IsNumber, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNumber()
  price: number;
  @IsNumber()
  @ApiProperty()
  quality: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
