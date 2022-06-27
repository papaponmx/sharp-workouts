import { render } from '@redwoodjs/testing/web'

import AccoutPage from './AccoutPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AccoutPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AccoutPage />)
    }).not.toThrow()
  })
})
