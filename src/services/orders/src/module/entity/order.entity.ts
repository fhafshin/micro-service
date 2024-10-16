import { Entity } from 'typeorm';
import { EntityNames } from '../../common/enums/entity-names.enum';
import { PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity(EntityNames.Order)
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
