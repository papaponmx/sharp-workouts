import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const roles = () => {
  return db.role.findMany()
}

export const role = ({ id }: Prisma.RoleWhereUniqueInput) => {
  return db.role.findUnique({
    where: { id },
  })
}

interface CreateRoleArgs {
  input: Prisma.RoleCreateInput
}

export const createRole = ({ input }: CreateRoleArgs) => {
  return db.role.create({
    data: input,
  })
}

interface UpdateRoleArgs extends Prisma.RoleWhereUniqueInput {
  input: Prisma.RoleUpdateInput
}

export const updateRole = ({ id, input }: UpdateRoleArgs) => {
  return db.role.update({
    data: input,
    where: { id },
  })
}

export const deleteRole = ({ id }: Prisma.RoleWhereUniqueInput) => {
  return db.role.delete({
    where: { id },
  })
}

export const Role = {
  User: (_obj, { root }: ResolverArgs<ReturnType<typeof role>>) =>
    db.role.findUnique({ where: { id: root.id } }).User(),
}
