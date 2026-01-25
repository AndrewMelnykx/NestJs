import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MovieEntity } from './movie.entity';

@Entity({ name: 'movie_posters' })
export class MoviePosterEntity {
  @PrimaryGeneratedColumn('uuid')
  posterId: string;

  @Column({ type: 'varchar', length: 255 })
  url: string;

  @OneToOne(() => MovieEntity, (movie) => movie.poster)
  movie: MovieEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
