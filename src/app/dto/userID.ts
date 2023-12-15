import { User } from "../interfaces/user"

export class UserID {
    id: number
    username: string

    constructor(user: User){
        this.id = user.id
        this.username= user.username
    }
}