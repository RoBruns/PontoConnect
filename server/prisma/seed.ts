import { randomUUID } from 'crypto'
import { prisma } from '../src/lib/prisma'
import * as bcrypt from 'bcrypt'

const main = async () => {
    const createdPlanType = await prisma.planType.create({
        data: {
            type_id: randomUUID(),
            type_name: 'Free',
        },
    })

    const createdPlan = await prisma.plan.create({
        data: {
            plan_id: randomUUID(),
            plan_name: 'Free',
            plan_price: 0.0,
            plan_created_at: new Date(),
            type_id: createdPlanType.type_id,
        },
    })

    const inserts = []

    const password = await bcrypt.hash('1234', 10)

    for (let i = 0; i < 50; i++) {
        inserts.push(
            prisma.user.create({
                data: {
                    user_id: randomUUID(),
                    user_login: `user${i}`,
                    user_password: password,
                    user_active: true,
                    user_created_at: new Date(),
                    plan_id: createdPlan.plan_id,
                },
            })
        )
    }

    await Promise.all(inserts)
}

main()
