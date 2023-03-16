import type { Prompt } from '@prisma/client'

import {
  prompts,
  prompt,
  createPrompt,
  updatePrompt,
  deletePrompt,
} from './prompts'
import type { StandardScenario } from './prompts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('prompts', () => {
  scenario('returns all prompts', async (scenario: StandardScenario) => {
    const result = await prompts()

    expect(result.length).toEqual(Object.keys(scenario.prompt).length)
  })

  scenario('returns a single prompt', async (scenario: StandardScenario) => {
    const result = await prompt({ id: scenario.prompt.one.id })

    expect(result).toEqual(scenario.prompt.one)
  })

  scenario('creates a prompt', async (scenario: StandardScenario) => {
    const result = await createPrompt({
      input: {
        prompt: 'String',
        isUse: true,
        profileId: scenario.prompt.two.profileId,
      },
    })

    expect(result.prompt).toEqual('String')
    expect(result.isUse).toEqual(true)
    expect(result.profileId).toEqual(scenario.prompt.two.profileId)
  })

  scenario('updates a prompt', async (scenario: StandardScenario) => {
    const original = (await prompt({ id: scenario.prompt.one.id })) as Prompt
    const result = await updatePrompt({
      id: original.id,
      input: { prompt: 'String2' },
    })

    expect(result.prompt).toEqual('String2')
  })

  scenario('deletes a prompt', async (scenario: StandardScenario) => {
    const original = (await deletePrompt({
      id: scenario.prompt.one.id,
    })) as Prompt
    const result = await prompt({ id: original.id })

    expect(result).toEqual(null)
  })
})
