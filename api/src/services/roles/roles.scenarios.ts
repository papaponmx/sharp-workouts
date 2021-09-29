import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RoleCreateArgs>({
  role: {
    one: {
      data: {
        name: 'String',
        User: { create: { email: 'String5901368', name: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String',
        User: { create: { email: 'String8080185', name: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
