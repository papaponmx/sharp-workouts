import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { email: 'String8556445', name: 'String' },
    two: { email: 'String9605272', name: 'String' },
  },
})

export type StandardScenario = typeof standard
