import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('sign-up')
  postUser(@Body() body: UserDTO): void {
    return this.appService.postUser(body)
  }
}
