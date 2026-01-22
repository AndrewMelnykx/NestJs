import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';

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
  // @Get('headers')
  // getHeader(@Headers() headers: any) {
  //   return headers;
  // }
  @Get('user-agent')
  getUserAgent(@Headers('user-agent') userAgent: string) {
    return { userAgent };
  }
  @Get('request')
  getRequestDetails(@Req() req: Request) {
    return {
      method: req.method,
      url: req.url,
      headers: req.headers,
      query: req.query,
      params: req.params,
    };
  }
  @Get('response')
  getResponseDetails(@Res() res: Response) {
    res.status(201).json({ message: 'Hello' });
  }
}
