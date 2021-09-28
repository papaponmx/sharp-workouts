import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const workoutHistories = () => {
  return db.workoutHistory.findMany()
}

export const workoutHistory = ({
  id,
}: Prisma.WorkoutHistoryWhereUniqueInput) => {
  return db.workoutHistory.findUnique({
    where: { id },
  })
}

interface CreateWorkoutHistoryArgs {
  input: Prisma.WorkoutHistoryCreateInput
}

export const createWorkoutHistory = ({ input }: CreateWorkoutHistoryArgs) => {
  return db.workoutHistory.create({
    data: input,
  })
}

interface UpdateWorkoutHistoryArgs
  extends Prisma.WorkoutHistoryWhereUniqueInput {
  input: Prisma.WorkoutHistoryUpdateInput
}

export const updateWorkoutHistory = ({
  id,
  input,
}: UpdateWorkoutHistoryArgs) => {
  return db.workoutHistory.update({
    data: input,
    where: { id },
  })
}

export const deleteWorkoutHistory = ({
  id,
}: Prisma.WorkoutHistoryWhereUniqueInput) => {
  return db.workoutHistory.delete({
    where: { id },
  })
}

export const WorkoutHistory = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof workoutHistory>>) =>
    db.workoutHistory.findUnique({ where: { id: root.id } }).user(),
  workoutDays: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof workoutHistory>>
  ) => db.workoutHistory.findUnique({ where: { id: root.id } }).workoutDays(),
}
