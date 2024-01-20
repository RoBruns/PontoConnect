export class User {
    id: string
    login: string
    password: string
    isAvailable: boolean
    constructor(
        id: string,
        login: string,
        password: string,
        isAvailable: boolean
    ) {
        this.id = id
        this.login = login
        this.password = password
        this.isAvailable = isAvailable
    }
}
