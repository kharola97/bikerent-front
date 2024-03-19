import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const ClientLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePassword = ()=>{
   
      setShowPassword(!showPassword)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic (e.g., send login request to backend)
      console.log(`Email: ${email}, Password: ${password}`);
    };
  return (
    <div className="min-h-screen flex  justify-center py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full  h-4/5 p-4 border border-gray-300 rounded-md shadow-sm ">
      <div >
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Login</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please sign in to your account.
        </p>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              onChange={handlePassword}
            />
            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">
              Show password
            </label>
          </div>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
        <div>
          Dont have an account? <Link className='text-blue-600' to='/clientregister'>Register</Link>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
  )
}

export default ClientLogin