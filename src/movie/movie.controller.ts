import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/rename-movie.dto';

@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Post()
  create(@Body() dto: CreateMovieDto) {
    return this.movieService.create(dto);
  }
}
