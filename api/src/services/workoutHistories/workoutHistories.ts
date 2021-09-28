import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType, ResolverArgs } from '@redwoodjs/api'
import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const workoutHistories = () => {
  requireAuth()

  return db.workoutHistory.findMany()
}

export const workoutHistory = ({
  id,
}: Prisma.WorkoutHistoryWhereUniqueInput) => {
  requireAuth()
  return db.workoutHistory.findUnique({
    where: { id },
  })
}

interface CreateWorkoutHistoryArgs {
  input: Prisma.WorkoutHistoryCreateInput
}

export const createWorkoutHistory = ({ input }: CreateWorkoutHistoryArgs) => {
  requireAuth()
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
  requireAuth()
  return db.workoutHistory.update({
    data: input,
    where: { id },
  })
}

export const deleteWorkoutHistory = ({
  id,
}: Prisma.WorkoutHistoryWhereUniqueInput) => {
  requireAuth()
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
