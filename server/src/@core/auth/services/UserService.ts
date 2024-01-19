import { Result } from '../../error/Result'
import { AuthResponseDto } from '../dtos/AuthResponseDto'
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
    async siginIn(
        signInDto: SignInDto
    ): Promise<Result<AuthResponseDto | string>> {
        let user: User | null = await this.userRepository.findUser(
            signInDto.login
        )

        if (!user) return Result.fail<AuthResponseDto>('Usuario não cadastrado')

        const isPasswordMatch = await this.passwordService.comparePassword(
            signInDto.password,
            user.password
        )

        if (!isPasswordMatch)
            return Result.fail<AuthResponseDto>('Senha incorreta')

        const token = this.tokenService.genToken(user.id, user.login)

        return Result.ok<AuthResponseDto>({ token })
    }
    async signUp(
        createUserDto: CreateUserDto
    ): Promise<Result<AuthResponseDto | string>> {
        let user: User | null = await this.userRepository.findUser(
            createUserDto.login
        )

        if (user) return Result.fail<AuthResponseDto>('Usuario já cadastrado')

        const hash = await this.passwordService.generateHash(
            createUserDto.password
        )
        createUserDto.password = hash

        user = await this.userRepository.saveUser(createUserDto)

        const token = this.tokenService.genToken(user!.id, user!.login)

        return Result.ok<AuthResponseDto>({ token })
    }
}
