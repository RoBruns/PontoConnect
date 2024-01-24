import fastify from 'fastify'
import { authRoutes } from './routes/auth'
import { scheduleJob } from 'node-schedule'
import { prisma } from './lib/prisma'

const main = async () => {
    const app = fastify()
    await app.register(authRoutes, {
        prefix: 'auth',
    })

    scheduleJob('0 0 * * *', () => {
        prisma.$queryRaw`
            UPDATE "User"
            SET user_active = FALSE
            WHERE user_id IN (
                SELECT user_id
                FROM "Statement"
                WHERE DATE('now', '-30 days') > (
                    SELECT MAX(sta_date)
                    FROM "Statement"
                    WHERE user_id = "User".user_id
                )
            );`
    })

    app.listen({
        port: 3333,
    }).then(() => {
        console.log('🚀 Server is running on http://localhost:3333')
    })
}

main()
