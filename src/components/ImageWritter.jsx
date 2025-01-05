import React from 'react'
import background from '../assest/footerbg.mp4'

export const ImageWritter = () => {
  return (
    <div className="w-full h-screen bg-white min-h-screen flex items-center justify-center p-4 video-background relative rounded-md">
      <div className="w-full h-full p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-8 rounded-lg relative">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover rounded-md"
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            borderRadius: '10px',
          }}
        >
          <source src={background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
