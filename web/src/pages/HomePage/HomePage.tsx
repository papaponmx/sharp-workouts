import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'

const HomePage = () => {
    const { isAuthenticated, currentUser } = useAuth()

    useEffect(() => {
    if (isAuthenticated) {
    }
  }, [isAuthenticated])


  return (
    <>
      <MetaTags title="HomePage" />

    <h1>Hello, {currentUser?.firstName}</h1>

    </>
  )
}

export default HomePage
