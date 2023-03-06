import { render } from '@redwoodjs/testing/web'

import RefreshThought from './RefreshThought'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RefreshThought', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RefreshThought />)
    }).not.toThrow()
  })
})
