// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PostBox> = (args) => {
//   return <PostBox {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PostBox from './PostBox'

export const generated = () => {
  return <PostBox />
}

export default {
  title: 'Components/PostBox',
  component: PostBox,
} as ComponentMeta<typeof PostBox>
