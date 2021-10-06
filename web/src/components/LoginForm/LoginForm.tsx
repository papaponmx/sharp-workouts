import { useAuth } from '@redwoodjs/auth'

const LoginForm = () => {
  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <div>
      <form action="#">
        {
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
        }

        {!isAuthenticated && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
