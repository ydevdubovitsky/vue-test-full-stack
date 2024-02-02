import { PrismaClient, GeneratedNumber } from '@prisma/client'

const prisma = new PrismaClient()

const findAllGeneratedNumbers = async (): Promise<GeneratedNumber[]> => {
    const generatedNumbers = await prisma.generatedNumber.findMany()
    return generatedNumbers
}

const saveGeneratedNumber = async (number: GeneratedNumber) : Promise<void> => {

    await prisma.generatedNumber.create({
        data: number
    })
}

export { findAllGeneratedNumbers, saveGeneratedNumber }