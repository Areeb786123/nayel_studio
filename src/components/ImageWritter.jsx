import React from 'react'
import background from '../assest/footerbg.mp4'

export const ImageWritter = () => {
  return (
    <div className="w-full h-screen bg-white min-h-screen flex items-center justify-center p-4 video-background relative rounded-md">
    <div className="w-full h-full p-[40px] mt-[20px] rounded-lg relative rounded-md">
        <video autoPlay loop muted className='w-full h-full'>
            <source src={background} type='video/mp4'/>
            test
        </video>
  </div>
  </div>
  
  )
}
