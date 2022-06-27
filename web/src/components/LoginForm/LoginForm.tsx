import { useAuth } from "@redwoodjs/auth";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState<string>('')

  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  const onSubmit = async () => {
    if (!isAuthenticated && email.length) {
      await logIn({ email, showUI: true });
    } else {
      await logOut();
    }
  };
  const onSignUp = async () => {
    if (!isAuthenticated && email.length) {
      await signUp({ email, showUI: true })
    }
  }

  return (
    <div>
      {!isAuthenticated &&
      <form action="#" className="grid grid-cols-1 gap-6 bg-indigo-700 text-gray-100 font-bold rounded-lg border shadow-lg p-10">
        <h2 className="text-2xl font-bold">Login/SignUp</h2>
      <div className="grid grid-cols-1 gap-6">
        <label htmlFor="email" className="block">
        <span className="text-gray-100">Email address</span>
        <input
          id="email"
          type="email"
          placeholder="email address"
          required
          className="mt-1 block w-full rounded-md bg-gray-100 border-transparent
          focus:border-gray-200 focus:bg-white focus:ring-0 placeholder-gray-600 text-gray-600 p-2"
          onChange={(e) => setEmail(e.target.value)}
          />
          </label>
      </div>
      <button
        className="bg-gray-50 hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded cursor-pointer"
        disabled={!email.length && !isAuthenticated}
        onClick={onSubmit}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>

      {!isAuthenticated && (
        <button
          disabled={!email.length && !isAuthenticated}
          onClick={onSignUp}
        >
          Sign Up
        </button>
      )}
    </form>

}
    </div>
  )
}

export default LoginForm
