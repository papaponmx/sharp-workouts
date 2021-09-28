import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RoleCreateArgs>({
  role: {
    one: {
      name: 'String',
      User: { create: { email: 'String5556577', name: 'String' } },
    },
    two: {
      name: 'String',
      User: { create: { email: 'String2962260', name: 'String' } },
    },
  },
})

export type StandardScenario = typeof standard
