import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { User } from "../entities/user.entity";

export class UserDTO {
    @IsString({ message: 'All fields are required!' })
    @IsNotEmpty({ message: 'All fields are required!' })
    username: string;

    @IsUrl(undefined, { message: 'All fields are required!' })
    @IsNotEmpty({ message: 'All fields are required!' })
    avatar: string;

    toUser() {
        return new User(this.username, this.avatar)
    }
};