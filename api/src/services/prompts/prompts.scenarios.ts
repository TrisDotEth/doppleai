import type { Prisma, Prompt } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PromptCreateArgs>({
  prompt: {
    one: {
      data: {
        prompt: 'String',
        isUse: true,
        Profile: { create: { user: 'String8622249' } },
      },
    },
    two: {
      data: {
        prompt: 'String',
        isUse: true,
        Profile: { create: { user: 'String5599376' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Prompt, 'prompt'>
