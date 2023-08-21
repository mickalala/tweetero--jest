import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { ShowTweets, Tweet } from './entities/tweet.entity';
import { UserDTO } from './dtos/user.dto';
import { TweetDTO } from './dtos/tweet.dto';

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

  postUser(body: UserDTO) {
    console.log(body)
    const user = new User(body.username, body.avatar);
    return this._users.push(user)
  }

  postTweet(body: TweetDTO): void {

    const existentUser = this._users.filter(u => u.username === body.username)
    if (!existentUser) {
      throw new Error('UNAUTHORIZED')
    }
    this._tweets.push(new Tweet(existentUser[0], body.tweet))
  }

  getTweets(username: string) {
    const userTweets = this._tweets.filter(
      t => t.user.username === username
    )
    const tweets = userTweets.map(
      t => new ShowTweets(t.user.username, t.user.avatar, t.tweet)
    )
    return tweets.reverse()
  }
}

