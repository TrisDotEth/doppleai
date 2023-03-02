import { render } from '@redwoodjs/testing/web'

import ProfileFeed from './ProfileFeed'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProfileFeed', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileFeed />)
    }).not.toThrow()
  })
})
