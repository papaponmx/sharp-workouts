import { render } from '@redwoodjs/testing/web'

import NavBar from './NavBar'

describe('NavBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavBar />)
    }).not.toThrow()
  })
})
