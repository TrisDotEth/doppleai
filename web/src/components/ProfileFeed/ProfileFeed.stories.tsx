// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ProfileFeed> = (args) => {
//   return <ProfileFeed {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ProfileFeed from './ProfileFeed'

export const generated = () => {
  return <ProfileFeed />
}

export default {
  title: 'Components/ProfileFeed',
  component: ProfileFeed,
} as ComponentMeta<typeof ProfileFeed>
