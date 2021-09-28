import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WorkoutHistoryCreateArgs>({
  workoutHistory: {
    one: { user: { create: { email: 'String2104572', name: 'String' } } },
    two: { user: { create: { email: 'String4599265', name: 'String' } } },
  },
})

export type StandardScenario = typeof standard
