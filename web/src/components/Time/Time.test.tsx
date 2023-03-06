import { render } from '@redwoodjs/testing/web'

import Time from './Time'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Time', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Time />)
    }).not.toThrow()
  })
})
