import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/slack/events')
  doPost(@Req() request: Request) {
    if (!request.body) {
      return new Response();
    }

    if ('type' in request.body) {
      // typescript in句
      if (
        request.body.type == 'url_verification' &&
        'challenge' in request.body
      ) {
        return request.body.challenge;
      }
    }
  }

  @Post('/message')
  message(@Req() req: Request) {
    if (!req.body) {
      return new Response();
    }
    if ('text' in req.body) {
      console.log(req.body.text);
      return req.body.text;
    }
  }

  @Post('/console')
  console(@Req() request: Request) {
    console.log(request);
  }

  @Get('test')
  test(): String {
    return 'test';
  }

  @Get('/hello')
  hello(): String {
    return this.appService.hello();
  }
}
