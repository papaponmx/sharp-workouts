import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WorkoutDayCreateArgs>({
  workoutDay: {
    one: { data: { didWorkout: true } },
    two: { data: { didWorkout: true } },
  },
})

export type StandardScenario = typeof standard
