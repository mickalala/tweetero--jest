import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './dtos/user.dto';
import { TweetDTO } from './dtos/tweet.dto';

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

  @Post('tweets')
  postTweet(@Body() body: TweetDTO): void {
    try {
      return this.appService.postTweet(body)
    } catch (err) {
      if (err.message === 'UNAUTHORIZED') {
        throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED)
      }
    }
  }

  @Get('tweets')
  getTweet(){}

  @Get('tweets/:username')
  getTweets(){}
}
