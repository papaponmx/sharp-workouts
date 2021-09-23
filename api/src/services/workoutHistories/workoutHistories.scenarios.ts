import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WorkoutHistoryCreateArgs>({
  workoutHistory: {
    one: { user: { create: { email: 'String9280415', name: 'String' } } },
    two: { user: { create: { email: 'String4187939', name: 'String' } } },
  },
})

export type StandardScenario = typeof standard
