import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const settings = () => {
  return db.setting.findMany()
}

export const setting = ({ id }: Prisma.SettingWhereUniqueInput) => {
  return db.setting.findUnique({
    where: { id },
  })
}

interface CreateSettingArgs {
  input: Prisma.SettingCreateInput
}

export const createSetting = ({ input }: CreateSettingArgs) => {
  return db.setting.create({
    data: input,
  })
}

interface UpdateSettingArgs extends Prisma.SettingWhereUniqueInput {
  input: Prisma.SettingUpdateInput
}

export const updateSetting = ({ id, input }: UpdateSettingArgs) => {
  return db.setting.update({
    data: input,
    where: { id },
  })
}

export const deleteSetting = ({ id }: Prisma.SettingWhereUniqueInput) => {
  return db.setting.delete({
    where: { id },
  })
}

export const Setting = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof setting>>) =>
    db.setting.findUnique({ where: { id: root.id } }).user(),
}
