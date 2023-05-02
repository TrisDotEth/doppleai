// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DeVpostReadyThoughts> = (args) => {
//   return <DeVpostReadyThoughts {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DeVpostReadyThoughts from './DeVpostReadyThoughts'

export const generated = () => {
  return <DeVpostReadyThoughts />
}

export default {
  title: 'Components/DeVpostReadyThoughts',
  component: DeVpostReadyThoughts,
} as ComponentMeta<typeof DeVpostReadyThoughts>
