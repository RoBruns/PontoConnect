import { randomUUID } from 'crypto'
import { prisma } from '../../../lib/prisma'
import { CreateUserDto } from '../dtos/CreateUserDto'
import { User } from '../model/User'
import { UserRepository } from '../model/UserRepository'

export class PrismaUserRepository implements UserRepository {
    async saveUser(createUserDto: CreateUserDto): Promise<User | null> {
        const user: User = await prisma.user.create({
            data: {
                id: randomUUID(),
                login: createUserDto.login,
                password: createUserDto.password,
                isAvailable: true,
            },
        })

        return user
    }
    async findUser(login: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: {
                login,
            },
        })

        if (!user) return null

        return user
    }
}
