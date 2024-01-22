import { JwtPayload } from 'jsonwebtoken'
import { ITokenService } from './ITokenService'
import * as jwt from 'jsonwebtoken'
import { CacheService } from '../../../cache/ChaceService'

export class TokenService implements ITokenService {
    private readonly cacheService: CacheService

    constructor(cacheService: CacheService) {
        this.cacheService = cacheService
    }

    async validateToken(token: string): Promise<string | JwtPayload> {
        const isInvalid = await this.cacheService.get(token)

        if (isInvalid) {
            return ''
        }

        const decodedToken = jwt.verify(token, process.env.JWTSECRET!)

        return decodedToken
    }

    genToken(id: string, login: string): string {
        return jwt.sign(
            {
                id,
                login,
            },
            process.env.JWTSECRET!,
            {
                expiresIn: 30 * 60,
            }
        )
    }

    getTokenData(token: string): Object | null {
        const data = jwt.decode(token) as jwt.JwtPayload

        return {
            id: data?.id,
            login: data?.login,
        }
    }
}
