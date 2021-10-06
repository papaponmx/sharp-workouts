import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

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
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof workoutDay>>) =>
    db.workoutDay.findUnique({ where: { id: root.id } }).user(),
}
