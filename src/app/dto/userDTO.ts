import { User } from "../interfaces/user"

export class UserDTO {
    id: number
    username: string
    name: string
    surname: string
    role: string
    password: string

    constructor(user: User){
        this.id = user.id
        this.username= user.username
        this.name = user.name
        this.surname= user.surname
        this.role = user.role
        this.password= user.password
    }
}