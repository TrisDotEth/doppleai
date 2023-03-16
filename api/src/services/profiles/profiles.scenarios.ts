import type { Prisma, Profile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProfileCreateArgs>({
  profile: {
    one: { data: { user: 'String6092412' } },
    two: { data: { user: 'String5445065' } },
  },
})

export type StandardScenario = ScenarioData<Profile, 'profile'>
