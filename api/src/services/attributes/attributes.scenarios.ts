import type { Prisma, Attribute } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AttributeCreateArgs>({
  attribute: {
    one: {
      data: {
        attribute: 'String',
        inUse: true,
        Profile: { create: { user: 'String7362328' } },
      },
    },
    two: {
      data: {
        attribute: 'String',
        inUse: true,
        Profile: { create: { user: 'String426043' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Attribute, 'attribute'>
