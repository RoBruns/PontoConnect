import fastify from 'fastify'
import { authRoutes } from './routes/auth'

const main = async () => {
    const app = fastify()
    await app.register(authRoutes, {
        prefix: 'auth',
    })

    app.listen({
        port: 3333,
    }).then(() => {
        console.log('🚀 Server is running on http://localhost:3333')
    })
}

main()
