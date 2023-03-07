import { render } from '@redwoodjs/testing/web'

import Tagline from './Tagline'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tagline', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tagline />)
    }).not.toThrow()
  })
})
