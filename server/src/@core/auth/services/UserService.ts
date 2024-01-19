import { CreateUserDto } from '../dtos/CreateUserDto'
import { SignInDto } from '../dtos/SiginDto'
import { IUserService } from '../model/IUserService'
import { User } from '../model/User'
import { UserRepository } from '../model/UserRepository'
import { IPasswordService } from '../util/password/IPasswordService'
import { ITokenService } from '../util/token/ITokenService'

export class UserService implements IUserService {
    private readonly userRepository: UserRepository
    private readonly passwordService: IPasswordService
    private readonly tokenService: ITokenService

    constructor(
        userRepository: UserRepository,
        passwordService: IPasswordService,
        tokenService: ITokenService
    ) {
        this.userRepository = userRepository
        this.passwordService = passwordService
        this.tokenService = tokenService
    }
    async siginIn(signInDto: SignInDto): Promise<User> {
        let user = await this.userRepository.findUser(signInDto.login)
    }
    signUp(createUserDto: CreateUserDto): Promise<User> {
        throw new Error('Method not implemented.')
    }
}
