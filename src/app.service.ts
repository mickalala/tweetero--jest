import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';
import { UserDTO } from './dtos/user.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private _users: User[]
  private _tweets: Tweet[]
  constructor() {
    this._users = [];
    this._tweets = [];
  }

  postUser(body: UserDTO): void {
    const user = new User(body.username, body.avatar)
    this._users.push(user)
  }
}

