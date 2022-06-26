import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'

const HomePage = () => {
  const [email, setEmail] = useState('')

  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  const onSubmit = async () => {
    if (!isAuthenticated && email.length) {
      await logIn({ email, showUI: true });
    } else {
      await logOut();
    }
  };
  return (
    <>
      <MetaTags title="Homepage" description="Homepage page" />

      <h1>HomePage</h1>

      <p>
         { isAuthenticated && 'You are authenticated'}
      </p>
      {!isAuthenticated &&

      <form action="#">
      <input
        type="email"
        placeholder="email address"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        disabled={!email.length && !isAuthenticated}
        onClick={onSubmit}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>

      {!isAuthenticated && (
        <button
          disabled={!email.length && !isAuthenticated}
          onClick={async () => {
            if (!isAuthenticated && email.length) {
              await signUp({ email, showUI: true })
            }
          }}
        >
          Sign Up
        </button>
      )}
    </form>

}

    </>
  )
}

export default HomePage
