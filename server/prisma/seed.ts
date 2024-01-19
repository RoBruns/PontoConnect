import { randomUUID } from 'crypto'
import { prisma } from '../src/lib/prisma'
import * as bcrypt from 'bcrypt'

const main = async () => {
    const inserts = []

    const password = await bcrypt.hash('1234', 10)

    for (let i = 0; i < 50; i++) {
        inserts.push(
            prisma.user.create({
                data: {
                    id: randomUUID(),
                    login: `nomeTeste${i}`,
                    password: password,
                    isAvailable: true,
                },
            })
        )
    }
    await Promise.all(inserts)
}
main()
