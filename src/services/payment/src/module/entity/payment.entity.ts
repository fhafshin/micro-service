import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityNames } from '../../common/enums/entity-names.enum';

@Entity(EntityNames.Payment)
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  amount: number;
  @Column()
  status: number;
}
