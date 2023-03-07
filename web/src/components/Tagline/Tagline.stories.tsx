// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Tagline> = (args) => {
//   return <Tagline {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Tagline from './Tagline'

export const generated = () => {
  return <Tagline />
}

export default {
  title: 'Components/Tagline',
  component: Tagline,
} as ComponentMeta<typeof Tagline>
