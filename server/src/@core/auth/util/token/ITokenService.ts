import { JwtPayload } from 'jsonwebtoken'

export interface ITokenService {
    genToken(id: string, login: string): string
    validateToken(token: string): string | JwtPayload
}
