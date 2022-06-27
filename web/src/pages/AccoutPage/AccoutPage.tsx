import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AccoutPage = () => {
  return (
    <>
      <MetaTags title="Accout" description="Accout page" />

      <h1>AccoutPage</h1>
      <p>
        Find me in <code>./web/src/pages/AccoutPage/AccoutPage.tsx</code>
      </p>
      <p>
        My default route is named <code>accout</code>, link to me with `
        <Link to={routes.accout()}>Accout</Link>`
      </p>
    </>
  )
}

export default AccoutPage
