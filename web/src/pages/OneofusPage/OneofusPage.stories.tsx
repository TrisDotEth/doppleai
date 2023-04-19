import type { ComponentMeta } from '@storybook/react'

import OneofusPage from './OneofusPage'

export const generated = () => {
  return <OneofusPage />
}

export default {
  title: 'Pages/OneofusPage',
  component: OneofusPage,
} as ComponentMeta<typeof OneofusPage>
