import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const alice = await prisma.location.upsert({
    where: { author: 'petsmart.com' },
    update: {},
    create: {
      name: 'Alice',
      author:'petsmart.com'
    },
  })
    console.log({ alice })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })