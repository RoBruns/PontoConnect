export class CreateUserDto {
    login: string
    password: string
    plan_id: string

    constructor(login: string, password: string, plan_id: string) {
        this.login = login
        this.password = password
        this.plan_id = plan_id
    }
}
