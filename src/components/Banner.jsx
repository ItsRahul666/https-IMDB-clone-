import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end' style={{backgroundImage : `url(https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg)`}}>

        <div className='text-white text-xl bg-gray-900/60 text-center w-full p-4'>
              AVENGERS
                </div>

    </div>
     
  )
}

export default Banner