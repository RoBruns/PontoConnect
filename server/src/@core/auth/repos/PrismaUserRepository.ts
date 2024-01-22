import { randomUUID } from 'crypto'
import { prisma } from '../../../lib/prisma'
import { CreateUserDto } from '../dtos/CreateUserDto'
import { User } from '../model/User'
import { UserRepository } from '../model/UserRepository'

export class PrismaUserRepository implements UserRepository {
    async saveUser(createUserDto: CreateUserDto): Promise<User | null> {
        const user: User = await prisma.user.create({
            data: {
                user_id: randomUUID(),
                user_login: createUserDto.login,
                user_password: createUserDto.password,
                user_active: true,
                user_created_at: new Date(),
                plan_id: createUserDto.plan_id,
            },
        })

        return user
    }
    async findUser(login: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: {
                user_login: login,
            },
        })

        if (!user) return null

        return user
    }
}
