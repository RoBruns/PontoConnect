export class User {
    user_id: string
    user_login: string
    user_password: string
    user_active: boolean
    user_created_at: Date | null
    plan_id: string

    constructor(
        user_id: string,
        user_login: string,
        user_password: string,
        user_active: boolean,
        user_created_at: Date | null,
        plan_id: string
    ) {
        this.user_id = user_id
        this.user_login = user_login
        this.user_password = user_password
        this.user_active = user_active
        this.user_created_at = user_created_at
        this.plan_id = plan_id
    }
}
