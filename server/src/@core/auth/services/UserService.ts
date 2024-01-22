import { CacheService } from '../../cache/ChaceService'
import { Result } from '../../error/Result'
import { AuthErrors } from '../../error/types/AuthErrors'
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
    private readonly cacheService: CacheService

    constructor(
        userRepository: UserRepository,
        passwordService: IPasswordService,
        tokenService: ITokenService,
        cacheService: CacheService
    ) {
        this.userRepository = userRepository
        this.passwordService = passwordService
        this.tokenService = tokenService
        this.cacheService = cacheService
    }
    async signIn(
        signInDto: SignInDto
    ): Promise<Result<AuthResponseDto | AuthErrors>> {
        let user: User | null = await this.userRepository.findUser(
            signInDto.login
        )

        if (!user) return Result.fail<AuthResponseDto>('Usuario não cadastrado')

        const isPasswordMatch = await this.passwordService.comparePassword(
            signInDto.password,
            user.user_password
        )

        if (!isPasswordMatch)
            return Result.fail<AuthResponseDto>('Senha incorreta')

        const isLogged = await this.cacheService.get(user.user_id)

        if (isLogged)
            return Result.fail<AuthResponseDto>(
                'Um usuário já está utilizando esta conta'
            )

        await this.cacheService.set(
            user!.user_id,
            JSON.stringify({
                id: user!.user_id,
                login: user!.user_login,
            }),
            'EX',
            1800
        )
        const token = this.tokenService.genToken(user.user_id, user.user_login)

        return Result.ok<AuthResponseDto>({ token })
    }
    async signUp(
        createUserDto: CreateUserDto
    ): Promise<Result<AuthResponseDto | AuthErrors>> {
        let user: User | null = await this.userRepository.findUser(
            createUserDto.login
        )

        if (user) return Result.fail<AuthResponseDto>('Usuario já cadastrado')

        const hash = await this.passwordService.generateHash(
            createUserDto.password
        )
        createUserDto.password = hash

        user = await this.userRepository.saveUser(createUserDto)

        const token = this.tokenService.genToken(
            user!.user_id,
            user!.user_login
        )

        return Result.ok<AuthResponseDto>({ token })
    }
}
