import { CreateUserDto } from '../dtos/CreateUserDto'
import { User } from '../model/User'
import { UserRepository } from '../model/UserRepository'

export class PrismaUserRepository implements UserRepository {
    saveUser(createUserDto: CreateUserDto): Promise<User | undefined> {
        throw new Error('Method not implemented.')
    }
    findUser(email: string): Promise<User | undefined> {
        throw new Error('Method not implemented.')
    }
}
