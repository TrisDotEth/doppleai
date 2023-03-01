import { render } from '@redwoodjs/testing/web'

import PostBox from './PostBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostBox />)
    }).not.toThrow()
  })
})
