import { FastifyInstance } from 'fastify'
import { AuthController } from '../controllers/auth/AuthController'
import { UserService } from '../@core/auth/services/UserService'
import { PrismaUserRepository } from '../@core/auth/repos/PrismaUserRepository'
import { PasswordService } from '../@core/auth/util/password/PasswordService'
import { TokenService } from '../@core/auth/util/token/TokenService'

export async function authRoutes(app: FastifyInstance) {
    const authController = new AuthController(
        new UserService(
            new PrismaUserRepository(),
            new PasswordService(),
            new TokenService()
        )
    )
    app.post('/signup', async (req, res) => authController.signUp(req, res))
    app.post('/signin', async (req, res) => authController.signIn(req, res))
}
