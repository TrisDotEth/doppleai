import { render } from '@redwoodjs/testing/web'

import OneofusPage from './OneofusPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OneofusPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OneofusPage />)
    }).not.toThrow()
  })
})
