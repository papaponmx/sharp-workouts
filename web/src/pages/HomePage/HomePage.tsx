import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import LoginForm from 'src/components/LoginForm/LoginForm'

const HomePage = () => {
  const { isAuthenticated, getCurrentUser, loading } = useAuth()
  const [currentUser, setCurrentUser,  ] = useState<any>()

  const fetchUser = async () => {
    const user = await getCurrentUser()
    console.log('user', user);

    setCurrentUser(user)
  }

  useEffect(() => {
    if(isAuthenticated){
      fetchUser()
    }
  }, [
    isAuthenticated
  ])

  if(currentUser) {
    console.log('TEST current user from db', currentUser);
  }

  return (
    <>
      <MetaTags title="Homepage" description="Homepage page" />

      <div className="flex items-center justify-center h-screen">

    {
      loading  ? 'Loading...' :
      (currentUser && isAuthenticated) ?
      <section className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
      <h2>Welcome</h2>
          <p>
        You are authenticated with the following email:
        <br />
        {currentUser?.email}
          </p>

      <ul>
        <li>
          <Link to={routes.account()}>My Account</Link>
        </li>
      </ul>
      </section>
      :
        <LoginForm />

      }
      </div>


    </>
  )
}

export default HomePage
