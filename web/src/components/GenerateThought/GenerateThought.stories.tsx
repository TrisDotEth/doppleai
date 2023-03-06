// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GenerateThought> = (args) => {
//   return <GenerateThought {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GenerateThought from './GenerateThought'

export const generated = () => {
  return <GenerateThought />
}

export default {
  title: 'Components/GenerateThought',
  component: GenerateThought,
} as ComponentMeta<typeof GenerateThought>
