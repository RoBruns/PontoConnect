import { ITokenService } from './ITokenService'
import * as jwt from 'jsonwebtoken'

export class TokenService implements ITokenService {
    validateToken(token: string): boolean {
        const decodedToken = jwt.verify(token, process.env.JWTSECRET!)
    }
    genToken(id: string, email: string, name: string): string {
        return jwt.sign(
            {
                id,
                email,
                name,
            },
            process.env.JWTSECRET!,
            {
                expiresIn: 30 * 60,
            }
        )
    }
}
