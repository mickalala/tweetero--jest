export class User {
    constructor(
        private _username: string,
        private _img: string) { }
    get username() {
        return this._username
    }
    get avatar() {
        return this._img
    }
}

