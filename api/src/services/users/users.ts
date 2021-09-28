import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/api'
import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = () => {}

export const users = () => {
  requireAuth({ roles: 'admin' })
  return db.user.findMany()
}

export const user = ({ id }: Prisma.UserWhereUniqueInput) => {
  requireAuth({ roles: ['admin', 'customer'] })

  return db.user.findUnique({
    where: { id },
  })
}

interface CreateUserArgs {
  input: Prisma.UserCreateInput
}

export const createUser = ({ input }: CreateUserArgs) => {
  return db.user.create({
    data: input,
  })
}

interface UpdateUserArgs extends Prisma.UserWhereUniqueInput {
  input: Prisma.UserUpdateInput
}

export const updateUser = ({ id, input }: UpdateUserArgs) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }: Prisma.UserWhereUniqueInput) => {
  requireAuth()
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  roles: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user.findUnique({ where: { id: root.id } }).roles(),
  workoutHistory: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user.findUnique({ where: { id: root.id } }).workoutHistory(),
}
