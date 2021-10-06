import { createRole, deleteRole, role, roles, updateRole } from './roles'
import type { StandardScenario } from './roles.scenarios'

describe('roles', () => {
  scenario('returns all roles', async (scenario: StandardScenario) => {
    const result = await roles()

    expect(result.length).toEqual(Object.keys(scenario.role).length)
  })

  scenario('returns a single role', async (scenario: StandardScenario) => {
    const result = await role({ id: scenario.role.one.id })

    expect(result).toEqual(scenario.role.one)
  })

  scenario('creates a role', async (scenario: StandardScenario) => {
    const result = await createRole({
      input: { name: 'String', userId: scenario.role.two.userId },
    })

    expect(result.name).toEqual('String')
    expect(result.userId).toEqual(scenario.role.two.userId)
  })

  scenario('updates a role', async (scenario: StandardScenario) => {
    const original = await role({ id: scenario.role.one.id })
    const result = await updateRole({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a role', async (scenario: StandardScenario) => {
    const original = await deleteRole({ id: scenario.role.one.id })
    const result = await role({ id: original.id })

    expect(result).toEqual(null)
  })
})
function mockRedwoodDirective(
  requireAuth: any,
  arg1: { context: { currentUser: { id: string } } }
) {
  throw new Error('Function not implemented.')
}
