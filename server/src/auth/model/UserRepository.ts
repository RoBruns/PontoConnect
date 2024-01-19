import { CreateUserDto } from '../dtos/CreateUserDto'
import { User } from './User'

export interface UserRepository {
    saveUser(createUserDto: CreateUserDto): Promise<User | undefined>
    findUser(email: string): Promise<User | undefined>
}
