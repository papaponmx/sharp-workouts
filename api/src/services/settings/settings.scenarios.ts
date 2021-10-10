import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SettingCreateArgs>({
  setting: {
    one: {
      data: { user: { create: { email: 'String7607221', name: 'String' } } },
    },
    two: {
      data: { user: { create: { email: 'String6765872', name: 'String' } } },
    },
  },
})

export type StandardScenario = typeof standard
