import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

const findAllUsers = async (): Promise<User[]> => {
    const users = await prisma.user.findMany()
    return users
}

export { findAllUsers }