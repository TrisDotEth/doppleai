import { render } from '@redwoodjs/testing/web'

import DatadeletionPage from './DatadeletionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DatadeletionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DatadeletionPage />)
    }).not.toThrow()
  })
})
