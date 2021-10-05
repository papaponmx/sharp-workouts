import { useAuth } from '@redwoodjs/auth'
import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'

import LoginForm from '../../components/LoginForm'

const LoginPage = () => {
  const { isAuthenticated, currentUser } = useAuth()

  const getOrRegister = async () => {
    // const currentUser = await fetch('/api/')
  }

  useEffect(() => {
    if (isAuthenticated) {
      getOrRegister()
    }
  }, [isAuthenticated])
  return (
    <>
      <MetaTags title="Login" description="Login into Sharp Workouts" />

      <section className="bg-gray-800 text-gray-100 h-screen w-screen pt-6 pl-6 ">
        <LoginForm />

        {isAuthenticated && (
          <div>
            <h2>{currentUser?.firstName}, you are logged in!</h2>
          </div>
        )}

        {/* // TODO: Add settings page */}

        <section className="mt-8">
          <Link
            to="/settings"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Settings Page
          </Link>
        </section>
      </section>
    </>
  )
}

export default LoginPage
