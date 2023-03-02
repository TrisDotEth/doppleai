import type { ComponentMeta } from '@storybook/react'

import PrivacypolicyPage from './PrivacypolicyPage'

export const generated = () => {
  return <PrivacypolicyPage />
}

export default {
  title: 'Pages/PrivacypolicyPage',
  component: PrivacypolicyPage,
} as ComponentMeta<typeof PrivacypolicyPage>
