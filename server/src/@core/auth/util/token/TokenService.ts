import { JwtPayload } from 'jsonwebtoken'
import { ITokenService } from './ITokenService'
import * as jwt from 'jsonwebtoken'

export class TokenService implements ITokenService {
    validateToken(token: string): string | JwtPayload {
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
}
