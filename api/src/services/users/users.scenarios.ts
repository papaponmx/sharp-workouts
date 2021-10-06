import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String1695751', name: 'String' } },
    two: { data: { email: 'String6667038', name: 'String' } },
  },
})

export type StandardScenario = typeof standard
