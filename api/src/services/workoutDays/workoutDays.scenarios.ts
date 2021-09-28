import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WorkoutDayCreateArgs>({
  workoutDay: { one: {}, two: {} },
})

export type StandardScenario = typeof standard
