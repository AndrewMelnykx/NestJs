import { ActorEntity } from 'src/actor/enteties/actor.entity';
import { ReviewEntity } from 'src/review/enteties/review.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MoviePosterEntity } from './poster.entity';

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

  // @Column({ name: 'poster_id', type: 'uuid', nullable: true })
  // posterId: string;

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

  @ManyToMany(() => ActorEntity, (actor) => actor.movies)
  @JoinTable({
    name: 'movie_actors',
    joinColumn: { name: 'movie_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'actor_id', referencedColumnName: 'id' },
  })
  actors: ActorEntity[];

  @OneToOne(() => MoviePosterEntity, (poster) => poster.movie, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinColumn({ name: 'poster_id' })
  poster: MoviePosterEntity | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
