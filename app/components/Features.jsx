import React from 'react'


const Features = () => {
  return (
    <>
    <div className='container mx-auto mt-20'>
    <h1 className='text-3xl font-extrabold text-white text-center py-8'>More Reasons to join</h1>
      <div className='px-5 grid grid-cols-1 md:grid-cols-4 gap-3'>  
        <div>
        <a href="#" className="block max-w-sm p-6 h-72 bg-gradient-to-br from-gray-950 via-gray-950 to-red-700 text-justify border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Enjoy on your TV</h5>
            <p className="font-normal text-white dark:text-white">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            <img src="/tv-Photoroom.png" className='h-32' alt="" />
            </a>
        </div>

        <div>
        <a href="#" className="block max-w-sm p-6 h-72 bg-gradient-to-br from-gray-950 via-gray-950 to-red-700 text-justify border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Download your shows to watch offline</h5>
            <p className="font-normal text-white dark:text-white">Save your favourites easily and always have something to watch.</p>
             <img src="/Netflix-DownloadGo.jpg" className='h-28 pt-3' alt="" />
            </a>
        </div> 

        <div>
        <a href="#" className="block max-w-sm p-6 h-72 bg-gradient-to-br from-gray-950 via-gray-950 to-red-700 text-justify border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Watch everywhere</h5>
            <p className="font-normal text-white dark:text-white">Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
            <img src="/multiple1-Photoroom.png" className='h-36 pt-3' alt="" />
            </a>
        </div> 

        <div>
        <a href="#" className="block max-w-sm p-6 h-72 bg-gradient-to-br from-gray-950 via-gray-950 to-red-700 text-justify border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Create profiles for kids</h5>
            <p className="font-normal text-white dark:text-white">Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
            <img src="/kids-Photoroom.png" className='h-32' alt="" />
            </a>
        </div>       
      </div>
    </div>
   
    </>
  )
}

export default Features
