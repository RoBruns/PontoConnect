import { CreateUserDto } from '../dtos/CreateUserDto'
import { User } from './User'

export interface UserRepository {
    saveUser(createUserDto: CreateUserDto): Promise<User | null>
    findUser(login: string): Promise<User | null>
}
