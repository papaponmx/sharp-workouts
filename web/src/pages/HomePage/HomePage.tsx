import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import LoginForm from 'src/components/LoginForm/LoginForm'

const HomePage = () => {
  const { isAuthenticated, getCurrentUser } = useAuth()
  const [currentUser, setCurrentUser,  ] = useState<any>()

  const fetchUser = async () => {
    const user = await getCurrentUser()
    console.log('user', user.meta);

    setCurrentUser(user)
  }

  useEffect(() => {
    if(isAuthenticated){
      fetchUser()
    }
  }, [
    isAuthenticated
  ])

  return (
    <>
      <MetaTags title="Homepage" description="Homepage page" />

      <div className="flex items-center justify-center h-screen">

    {
      (currentUser && isAuthenticated) ?
      <section className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
      <h2>
        { 'You are authenticated '}
        {  currentUser.meta.email}
      </h2>

      </section>
      :
        <LoginForm />

      }
      </div>


    </>
  )
}

export default HomePage
