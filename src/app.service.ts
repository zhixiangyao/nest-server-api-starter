import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloText(): { text: string } {
    return {
      text: 'Hello World!',
    };
  }
}
