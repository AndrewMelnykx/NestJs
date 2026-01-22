import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller(
  // {path: 'movies',host: ['api.nest.usa, api.google.com'],}
  'movies',
)
export class MovieController {
  @Get()
  // findAll(@Query('genre') genre: string) {
  //   return genre
  //     ? `Movies in genre ${genre}`
  //     : [
  //         {
  //           title: 'Fight club',
  //         },
  //         {
  //           title: 'Pulp fiction',
  //         },
  //       ];
  // }
  findAll(@Query() query: any) {
    return JSON.stringify(query);
  }
  @Post()
  create(@Body() body: { title: string; genre: string }) {
    // return `Movie "${body.title} with genre ${body.genre} has been added"`;
    return body;
  }
}
