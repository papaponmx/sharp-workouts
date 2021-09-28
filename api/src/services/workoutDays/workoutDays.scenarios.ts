import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WorkoutDayCreateArgs>({
  workoutDay: {
    one: {
      didWorkout: true,
      user: { create: { email: 'String387266', name: 'String' } },
    },
    two: {
      didWorkout: true,
      user: { create: { email: 'String4335791', name: 'String' } },
    },
  },
})

export type StandardScenario = typeof standard
