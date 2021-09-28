import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RoleCreateArgs>({
  role: { one: { name: 'String' }, two: { name: 'String' } },
})

export type StandardScenario = typeof standard
