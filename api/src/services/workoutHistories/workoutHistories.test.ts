import {
  workoutHistories,
  workoutHistory,
  createWorkoutHistory,
  updateWorkoutHistory,
  deleteWorkoutHistory,
} from './workoutHistories'
import type { StandardScenario } from './workoutHistories.scenarios'

describe('workoutHistories', () => {
  scenario(
    'returns all workoutHistories',
    async (scenario: StandardScenario) => {
      const result = await workoutHistories()

      expect(result.length).toEqual(Object.keys(scenario.workoutHistory).length)
    }
  )

  scenario(
    'returns a single workoutHistory',
    async (scenario: StandardScenario) => {
      const result = await workoutHistory({
        id: scenario.workoutHistory.one.id,
      })

      expect(result).toEqual(scenario.workoutHistory.one)
    }
  )

  scenario('creates a workoutHistory', async (scenario: StandardScenario) => {
    const result = await createWorkoutHistory({
      input: { userId: scenario.workoutHistory.two.userId },
    })

    expect(result.userId).toEqual(scenario.workoutHistory.two.userId)
  })

  scenario('updates a workoutHistory', async (scenario: StandardScenario) => {
    const original = await workoutHistory({
      id: scenario.workoutHistory.one.id,
    })
    const result = await updateWorkoutHistory({
      id: original.id,
      input: { userId: scenario.workoutHistory.two.userId },
    })

    expect(result.userId).toEqual(scenario.workoutHistory.two.userId)
  })

  scenario('deletes a workoutHistory', async (scenario: StandardScenario) => {
    const original = await deleteWorkoutHistory({
      id: scenario.workoutHistory.one.id,
    })
    const result = await workoutHistory({ id: original.id })

    expect(result).toEqual(null)
  })
})
