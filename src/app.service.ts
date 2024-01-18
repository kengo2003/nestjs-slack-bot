import { Injectable } from '@nestjs/common';
import { AppController } from './app.controller';

@Injectable()
export class AppService {

  hello(): String {
    return 'Hello World';
  }
}
