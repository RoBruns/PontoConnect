import { Result } from '../../error/Result'
import { AuthErrors } from '../../error/types/AuthErrors'
import { AuthResponseDto } from '../dtos/AuthResponseDto'
import { CreateUserDto } from '../dtos/CreateUserDto'
import { SignInDto } from '../dtos/SiginDto'

export interface IUserService {
    signIn(signInDto: SignInDto): Promise<Result<AuthResponseDto | AuthErrors>>
    signUp(
        createUserDto: CreateUserDto
    ): Promise<Result<AuthResponseDto | AuthErrors>>
    signOut(token: string): Promise<Result<void | AuthErrors>>
}
