import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SettingsPage = () => {
  return (
    <>
      <MetaTags
        title="Settings"
        // description="Settings description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>SettingsPage</h1>
      <p>
        Find me in <code>./web/src/pages/SettingsPage/SettingsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>settings</code>, link to me with `
        <Link to={routes.settings()}>Settings</Link>`
      </p>
    </>
  )
}

export default SettingsPage
