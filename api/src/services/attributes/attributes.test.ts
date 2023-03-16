import type { Attribute } from '@prisma/client'

import {
  attributes,
  attribute,
  createAttribute,
  updateAttribute,
  deleteAttribute,
} from './attributes'
import type { StandardScenario } from './attributes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('attributes', () => {
  scenario('returns all attributes', async (scenario: StandardScenario) => {
    const result = await attributes()

    expect(result.length).toEqual(Object.keys(scenario.attribute).length)
  })

  scenario('returns a single attribute', async (scenario: StandardScenario) => {
    const result = await attribute({ id: scenario.attribute.one.id })

    expect(result).toEqual(scenario.attribute.one)
  })

  scenario('creates a attribute', async (scenario: StandardScenario) => {
    const result = await createAttribute({
      input: {
        attribute: 'String',
        inUse: true,
        profileId: scenario.attribute.two.profileId,
      },
    })

    expect(result.attribute).toEqual('String')
    expect(result.inUse).toEqual(true)
    expect(result.profileId).toEqual(scenario.attribute.two.profileId)
  })

  scenario('updates a attribute', async (scenario: StandardScenario) => {
    const original = (await attribute({
      id: scenario.attribute.one.id,
    })) as Attribute
    const result = await updateAttribute({
      id: original.id,
      input: { attribute: 'String2' },
    })

    expect(result.attribute).toEqual('String2')
  })

  scenario('deletes a attribute', async (scenario: StandardScenario) => {
    const original = (await deleteAttribute({
      id: scenario.attribute.one.id,
    })) as Attribute
    const result = await attribute({ id: original.id })

    expect(result).toEqual(null)
  })
})
