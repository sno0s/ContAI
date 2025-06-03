import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Launch {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  date!: string;

  @Column()
  description!: string;

  @Column('float')
  amount!: number;

  @Column()
  type!: 'credit' | 'debit';
}
