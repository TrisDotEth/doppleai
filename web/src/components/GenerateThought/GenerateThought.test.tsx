import { render } from '@redwoodjs/testing/web'

import GenerateThought from './GenerateThought'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GenerateThought', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GenerateThought />)
    }).not.toThrow()
  })
})
