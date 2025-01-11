import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex flex-col w-full h-screen justify-center bg-black items-center'>
            <div>
            <h1 className='text-red-700 font-semibold text-3xl py-6 text-center w-full'>
                An Error as Occured, please sign up correctly
            </h1>
            </div>
            <div>
                <a href="/login" className="bg-red-600 rounded-lg px-5 py-2 text-white">Click to go singup page</a>
            </div>
      </div>
    </>
  )
}

export default page
