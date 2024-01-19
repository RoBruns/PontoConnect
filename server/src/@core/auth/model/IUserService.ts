import { Result } from '../../error/Result'
import { AuthResponseDto } from '../dtos/AuthResponseDto'
import { CreateUserDto } from '../dtos/CreateUserDto'
import { SignInDto } from '../dtos/SiginDto'
import { User } from './User'

export interface IUserService {
    siginIn(signInDto: SignInDto): Promise<Result<AuthResponseDto | string>>
    signUp(
        createUserDto: CreateUserDto
    ): Promise<Result<AuthResponseDto | string>>
}
