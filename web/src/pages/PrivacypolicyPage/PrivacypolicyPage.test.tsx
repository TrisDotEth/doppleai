import { render } from '@redwoodjs/testing/web'

import PrivacypolicyPage from './PrivacypolicyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrivacypolicyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrivacypolicyPage />)
    }).not.toThrow()
  })
})
