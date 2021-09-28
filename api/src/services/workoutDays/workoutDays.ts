import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const workoutDays = () => {
  return db.workoutDay.findMany()
}

export const workoutDay = ({ id }: Prisma.WorkoutDayWhereUniqueInput) => {
  return db.workoutDay.findUnique({
    where: { id },
  })
}

interface CreateWorkoutDayArgs {
  input: Prisma.WorkoutDayCreateInput
}

export const createWorkoutDay = ({ input }: CreateWorkoutDayArgs) => {
  return db.workoutDay.create({
    data: input,
  })
}

interface UpdateWorkoutDayArgs extends Prisma.WorkoutDayWhereUniqueInput {
  input: Prisma.WorkoutDayUpdateInput
}

export const updateWorkoutDay = ({ id, input }: UpdateWorkoutDayArgs) => {
  return db.workoutDay.update({
    data: input,
    where: { id },
  })
}

export const deleteWorkoutDay = ({ id }: Prisma.WorkoutDayWhereUniqueInput) => {
  return db.workoutDay.delete({
    where: { id },
  })
}

export const WorkoutDay = {
  WorkoutHistory: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof workoutDay>>
  ) => db.workoutDay.findUnique({ where: { id: root.id } }).WorkoutHistory(),
}
