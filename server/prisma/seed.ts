import { randomUUID } from 'crypto'
import { prisma } from '../src/lib/prisma'

const main = async () => {
    const inserts = []

    for (let i = 0; i < 50; i++) {
        inserts.push(
            prisma.user.create({
                data: {
                    id: randomUUID(),
                    login: `asddasd${i}`,
                    password: '12345678',
                    isAvailable: true,
                },
            })
        )
    }
    await Promise.all(inserts)
}
main()
