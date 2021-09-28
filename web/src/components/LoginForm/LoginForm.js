import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')

  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <div>
      <form action="#">
        {!isAuthenticated && (
          <input
            type="email"
            placeholder="email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        <button
          disabled={!email.length && !isAuthenticated}
          onClick={async () => {
            if (!isAuthenticated && email.length) {
              await logIn({ email, showUI: true })
            } else {
              await logOut()
            }
          }}
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
    </div>
  )
}

export default LoginForm
