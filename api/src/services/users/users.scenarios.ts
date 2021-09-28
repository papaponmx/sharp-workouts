import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { email: 'String5034055', name: 'String' },
    two: { email: 'String9297179', name: 'String' },
  },
})

export type StandardScenario = typeof standard
