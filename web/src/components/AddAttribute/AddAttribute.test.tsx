import { render } from '@redwoodjs/testing/web'

import AddAttribute from './AddAttribute'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddAttribute', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddAttribute />)
    }).not.toThrow()
  })
})
