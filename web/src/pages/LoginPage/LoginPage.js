import { MetaTags } from '@redwoodjs/web'
import { LoginForm } from '$src/components'

const LoginPage = () => {

  return (
    <>
      <MetaTags
        title="Login"
        // description="Login description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>LoginPage</h1>
      <LoginForm />
    </>
  )
}

export default LoginPage
