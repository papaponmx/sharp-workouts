import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

const AccountPage = () => {
  const { hasRole } = useAuth()

  console.log('User has user role', hasRole('user'))
  return (
    <>
      <MetaTags title="Account" description="Account page" />

      <h1>Account</h1>


      <section>
        <h2>My settings</h2>
        <div></div>
      </section>
    </>
  )
}

export default AccountPage
