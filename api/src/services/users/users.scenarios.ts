import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { email: 'String8868846', name: 'String' },
    two: { email: 'String9914879', name: 'String' },
  },
})

export type StandardScenario = typeof standard
