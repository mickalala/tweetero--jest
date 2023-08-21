import { User } from "./user.entity"

export class Tweet {
    constructor(
        private _user: User,
        private _tweet: string
    ) { }
    get user() {
        return this._user
    }
    get tweet() {
        return this._tweet
    }
}

export class ShowTweets {
    constructor(
        private _username: string,
        private _avatar: string,
        private _tweet: string
    ) { }
}