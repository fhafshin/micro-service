import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityNames } from '../../common/enums/entity-names.enum';

@Entity(EntityNames.Orders)
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  customerId: number;
  @Column()
  productId: number;
  @Column()
  status: number;
  @Column()
  paymentId: number;
}
