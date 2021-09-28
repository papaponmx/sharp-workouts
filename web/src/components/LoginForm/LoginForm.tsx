import { useAuth } from '@redwoodjs/auth'

const LoginForm = () => {
  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <div>
      <form action="#">
        {!isAuthenticated && (
          <button
            onClick={async () => {
              if (!isAuthenticated) {
                await logIn({ showUI: true })
              } else {
                await logOut()
              }
            }}
          >
            {isAuthenticated ? 'Log Out' : 'Log In'}
          </button>
        )}

        {!isAuthenticated && (
          <button
            disabled={!isAuthenticated}
            onClick={async () => {
              if (!isAuthenticated) {
                await signUp({ showUI: true })
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
