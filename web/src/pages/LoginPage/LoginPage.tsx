import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'

import LoginForm from '../../components/LoginForm'

const LoginPage = () => {
  const { isAuthenticated, currentUser } = useAuth()

  const getOrRegister = async () => {
    const currentUser = await fetch('/api/')

    console.log('🤓', currentUser)
  }

  useEffect(() => {
    if (isAuthenticated) {
      getOrRegister()
    }
  }, [isAuthenticated])
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

      {isAuthenticated && (
        <div>
          <h2>{currentUser.firstName}, you are logged in!</h2>
        </div>
      )}
    </>
  )
}

export default LoginPage
