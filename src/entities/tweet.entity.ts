export class Tweet {
    constructor(
        private _user: string,
        private _tweet: string
    ) { }
    get user() {
        return this._user
    }
    get tweet() {
        return this._tweet
    }
}