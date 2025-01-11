'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/SupabaseClient'

export default function AccountForm({ user }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState(null)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    // } catch (error) {
    //   alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
       if (error) {
          redirect('/error')
        }
      
        revalidatePath('/', 'layout')
        redirect('/movies')
      }
      catch(error){
        
      }
  }

  return (
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
        <div className="relative flex flex-col items-center justify-center h-full text-white px-4">
        <div className='container bg-transparent border border-white max-w-md mt-40'>
                <div className='px-8'>
                <h1 className='py-2 text-3xl font-extrabold text-white'>Account Settings</h1>
                 {/* User Email */}
  <div className="mb-4">
    <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
    <input
      id="email"
      type="text"
      value={user?.email}
      disabled
      className="w-full bg-transparent text-white border border-gray-600 rounded-lg px-4 py-2 cursor-not-allowed"
    />
  </div>

  {/* Full Name */}
  <div className="mb-4">
    <label htmlFor="fullName" className="block text-sm text-gray-400 mb-1">Full Name</label>
    <input
      id="fullName"
      type="text"
      value={fullname || ''}
      onChange={(e) => setFullname(e.target.value)}
      className="w-full bg-transparent text-white border border-gray-600 rounded-lg px-4 py-2"
      placeholder="Enter your full name"
    />
  </div>

  {/* Username */}
  <div className="mb-4">
    <label htmlFor="username" className="block text-sm text-gray-400 mb-1">Username</label>
    <input
      id="username"
      type="text"
      value={username || ''}
      onChange={(e) => setUsername(e.target.value)}
      className="w-full bg-transparent text-white border border-gray-600 rounded-lg px-4 py-2"
      placeholder="Choose a username"
    />
  </div>

  {/* Website */}
  <div className="mb-6">
    <label htmlFor="website" className="block text-sm text-gray-400 mb-1">Website</label>
    <input
      id="website"
      type="url"
      value={website || ''}
      onChange={(e) => setWebsite(e.target.value)}
      className="w-full bg-transparent text-white border border-gray-600 rounded-lg px-4 py-2"
      placeholder="Your website link"
    />
  </div>

  {/* Update Profile Button */}
  <button
    onClick={() => updateProfile({ fullname, username, website, avatar_url })}
    disabled={loading}
    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-4 py-2 transition"
  >
    {loading ? 'Updating...' : 'Update Profile'}
  </button>

  {/* Divider */}
  <hr className="my-6 border-gray-600" />

  {/* Sign Out Button */}
  <form action="/auth/signout" className='my-5' method="post">
    <button
      type="submit"
      className="w-full bg-gray-600 hover:bg-transparent text-white font-semibold rounded-lg px-4 py-2 transition"
    >
      Sign Out
    </button>
  </form>
</div>
        </div>
          </div>
</div>
  )
}