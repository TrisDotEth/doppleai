// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof RefreshThought> = (args) => {
//   return <RefreshThought {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import RefreshThought from './RefreshThought'

export const generated = () => {
  return <RefreshThought />
}

export default {
  title: 'Components/RefreshThought',
  component: RefreshThought,
} as ComponentMeta<typeof RefreshThought>
