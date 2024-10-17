import { IsNumberString, IsString} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty({ type: Number })
  @IsNumberString()
  price: number;
  @IsNumberString()
  @ApiProperty()
  quality: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
