import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityNames } from '../../common/enums/entity-names.enum';

@Entity(EntityNames.Customers)
export class CustomersEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fullname: string;
  @Column()
  address: string;
}
