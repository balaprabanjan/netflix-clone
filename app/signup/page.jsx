import { login, signup } from './actions'
import Footer from './footer'

export default function LoginPage() {
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img
                src="/navname.png" 
                alt="Netflix Logo"
              />
            </div>
            </div>
        </nav>
            <div className="absolute inset-0">
          <img
            src="/herobg.jpg"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className='container bg-transparent border border-white max-w-md mt-40'>
                <div className='px-8'>
                <h1 className='py-2 text-3xl font-extrabold text-white'>Sign In</h1>
            <form className='py-5'>
              <label htmlFor="email" className='block mb-2 text-xl font-bold text-white dark:text-white py-3'></label>
              <input id="email" name="email" type="email" className='bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 ' placeholder="Email or mobile number" required />
              <label htmlFor="password" className='block mb-2 text-xl font-bold text-white dark:text-white py-3'></label>
              <input id="password" name="password" type="password"  className='bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5' placeholder="Password" required />
              <div className='text-center my-5'>
              <button className='bg-red-600 px-36 py-3 rounded-sm' formAction={signup}>Sign up</button>
              <p className='py-4'>OR</p>
              <button className='bg-transparent border border-white px-28 py-3 rounded-sm' formAction={signup}>Use a sign-in code</button>
              <p className='py-5'>Forgot password?</p>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-white dark:text-white">Remember me</label>
            </div> 
            </div>           
            </form>
            
            <p>New to Netflix? <a href="">Sign up now.</a></p>
            <p className='font-light'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
              </div>
                </div>
              </div>
    </div>
    <Footer/>
    </>
  )
}