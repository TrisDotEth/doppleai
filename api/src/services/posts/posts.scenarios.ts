import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        body: 'String',
        user: 'String',
        manualPost: true,
        usedAsPost: true,
        whenWillPost: '2023-03-01T02:16:23.960Z',
      },
    },
    two: {
      data: {
        body: 'String',
        user: 'String',
        manualPost: true,
        usedAsPost: true,
        whenWillPost: '2023-03-01T02:16:23.960Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
