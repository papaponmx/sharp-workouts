import {
  settings,
  setting,
  createSetting,
  updateSetting,
  deleteSetting,
} from './settings'
import type { StandardScenario } from './settings.scenarios'

describe('settings', () => {
  scenario('returns all settings', async (scenario: StandardScenario) => {
    const result = await settings()

    expect(result.length).toEqual(Object.keys(scenario.setting).length)
  })

  scenario('returns a single setting', async (scenario: StandardScenario) => {
    const result = await setting({ id: scenario.setting.one.id })

    expect(result).toEqual(scenario.setting.one)
  })

  scenario('creates a setting', async (scenario: StandardScenario) => {
    const result = await createSetting({
      input: { userId: scenario.setting.two.userId },
    })

    expect(result.userId).toEqual(scenario.setting.two.userId)
  })

  scenario('updates a setting', async (scenario: StandardScenario) => {
    const original = await setting({ id: scenario.setting.one.id })
    const result = await updateSetting({
      id: original.id,
      input: { userId: scenario.setting.two.userId },
    })

    expect(result.userId).toEqual(scenario.setting.two.userId)
  })

  scenario('deletes a setting', async (scenario: StandardScenario) => {
    const original = await deleteSetting({ id: scenario.setting.one.id })
    const result = await setting({ id: original.id })

    expect(result).toEqual(null)
  })
})
