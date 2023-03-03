// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ProfileHeader> = (args) => {
//   return <ProfileHeader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ProfileHeader from './ProfileHeader'

export const generated = () => {
  return <ProfileHeader />
}

export default {
  title: 'Components/ProfileHeader',
  component: ProfileHeader,
} as ComponentMeta<typeof ProfileHeader>
