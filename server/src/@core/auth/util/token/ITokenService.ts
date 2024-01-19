import { JwtPayload } from 'jsonwebtoken'

export interface ITokenService {
    genToken(id: string, email: string, name: string): string
    validateToken(token: string): string | JwtPayload
}
