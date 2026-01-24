import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'movies' })
export class MovieEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 128,
    // nullable:true
  })
  title: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    name: 'released_year',
    type: 'int',
    unsigned: true,
  })
  releasedYear: number;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
    default: 0.0,
  })
  rating: number;

  @Column({ name: 'released_date', type: 'date', nullable: true })
  releasedDate: string;

  @Column({ name: ' is_available', type: 'boolean', default: false })
  isAvailable: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
