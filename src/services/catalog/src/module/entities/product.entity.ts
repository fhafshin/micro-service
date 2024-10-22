import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityNames } from '../../common/enums/entity-names.enum';

@Entity(EntityNames.Product)
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  quantity: number;
}
