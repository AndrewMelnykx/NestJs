import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { In, Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';
import { ActorEntity } from 'src/actor/enteties/actor.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
    @InjectRepository(ActorEntity)
    private readonly actorRepository: Repository<ActorEntity>,
  ) {}
  async findAll(): Promise<MovieEntity[]> {
    return await this.movieRepository.find({
      where: {
        isAvailable: true,
      },
      order: {
        createdAt: 'desc',
      },
      //   take: 1,
      select: {
        id: true,
        title: true,
      },
    });
  }
  async findById(id: string): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!movie) {
      throw new NotFoundException();
    }
    return movie;
  }
  async create(dto: MovieDto): Promise<MovieEntity> {
    const { title, releasedYear, actorsIds } = dto;

    const actors = await this.actorRepository.find({
      where: {
        id: In(actorsIds),
      },
    });

    if (!actors || !actors.length) {
      throw new NotFoundException('Some of actors have not been found');
    }

    const movie = this.movieRepository.create({ title, releasedYear });

    return await this.movieRepository.save(movie);
  }
  async update(id: string, dto: MovieDto): Promise<boolean> {
    const movie = await this.findById(id);
    Object.assign(movie, dto);
    await this.movieRepository.save(movie);
    return true;
  }
  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);
    await this.movieRepository.remove(movie);
    return id;
  }
}
