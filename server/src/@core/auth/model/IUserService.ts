import { CreateUserDto } from '../dtos/CreateUserDto'
import { SignInDto } from '../dtos/SiginDto'
import { User } from './User'

export interface IUserService {
    siginIn(signInDto: SignInDto): Promise<User>
    signUp(createUserDto: CreateUserDto): Promise<User>
}
