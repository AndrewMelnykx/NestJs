import { ReviewEntity } from 'src/review/enteties/review.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Genre {
  ACTION = 'action',
  DRAMA = 'drama',
  COMEDY = 'comedy',
  HORROR = 'horror',
}

@Entity({ name: 'movies' })
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
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
  @Column({ type: 'enum', enum: Genre, default: Genre.COMEDY })
  genre: Genre;

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

  // @Column({ name: 'released_date', type: 'date', nullable: true })
  // releasedDate: string;

  @Column({ name: ' is_available', type: 'boolean', default: false })
  isAvailable: boolean;

  @OneToMany(() => ReviewEntity, (review) => review.movie)
  reviews: ReviewEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
