import type { ComponentMeta } from '@storybook/react'

import DatadeletionPage from './DatadeletionPage'

export const generated = () => {
  return <DatadeletionPage />
}

export default {
  title: 'Pages/DatadeletionPage',
  component: DatadeletionPage,
} as ComponentMeta<typeof DatadeletionPage>
