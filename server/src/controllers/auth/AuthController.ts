import { IUserService } from '../../@core/auth/model/IUserService'
import { FastifyReply } from 'fastify'
import { FastifyRequestType } from 'fastify/types/type-provider'
import { CreateUserDto } from '../../@core/auth/dtos/CreateUserDto'
import { SignInDto } from '../../@core/auth/dtos/SiginDto'
import { authErrorStatusMap } from './authErrorStatusMap'
import { RedisService } from '../../@core/cache/RedisService'

export class AuthController {
    private readonly userService: IUserService

    constructor(userService: IUserService) {
        this.userService = userService
    }

    async signUp(req: FastifyRequestType, res: FastifyReply) {
        const createUserDto: CreateUserDto = req.body as CreateUserDto

        const userTokenOrError = await this.userService.signUp(createUserDto)

        if (userTokenOrError.error) {
            const { error } = userTokenOrError

            return res
                .status(
                    authErrorStatusMap[error as keyof typeof authErrorStatusMap]
                )
                .send({ message: error })
        }

        return res.status(201).send(userTokenOrError.getValue())
    }
    async signIn(req: FastifyRequestType, res: FastifyReply) {
        const signInDto: SignInDto = req.body as SignInDto

        const userTokenOrError = await this.userService.signIn(signInDto)

        if (userTokenOrError.error) {
            const { error } = userTokenOrError

            return res
                .status(
                    authErrorStatusMap[error as keyof typeof authErrorStatusMap]
                )
                .send({ message: error })
        }

        return res.status(200).send(userTokenOrError.getValue())
    }
}
