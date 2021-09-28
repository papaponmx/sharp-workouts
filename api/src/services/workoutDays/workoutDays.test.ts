import {
  workoutDays,
  workoutDay,
  createWorkoutDay,
  updateWorkoutDay,
  deleteWorkoutDay,
} from './workoutDays'
import type { StandardScenario } from './workoutDays.scenarios'

describe('workoutDays', () => {
  scenario('returns all workoutDays', async (scenario: StandardScenario) => {
    const result = await workoutDays()

    expect(result.length).toEqual(Object.keys(scenario.workoutDay).length)
  })

  scenario(
    'returns a single workoutDay',
    async (scenario: StandardScenario) => {
      const result = await workoutDay({ id: scenario.workoutDay.one.id })

      expect(result).toEqual(scenario.workoutDay.one)
    }
  )

  scenario('deletes a workoutDay', async (scenario: StandardScenario) => {
    const original = await deleteWorkoutDay({ id: scenario.workoutDay.one.id })
    const result = await workoutDay({ id: original.id })

    expect(result).toEqual(null)
  })
})
