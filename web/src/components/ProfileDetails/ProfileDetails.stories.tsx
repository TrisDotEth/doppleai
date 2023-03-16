// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ProfileDetails> = (args) => {
//   return <ProfileDetails {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ProfileDetails from './ProfileDetails'

export const generated = () => {
  return <ProfileDetails />
}

export default {
  title: 'Components/ProfileDetails',
  component: ProfileDetails,
} as ComponentMeta<typeof ProfileDetails>
