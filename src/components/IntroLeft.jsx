import React from 'react'
import Typewriter from 'typewriter-effect';
import anim from '../assest/whatsapp.gif'

import { Player } from '@lottiefiles/react-lottie-player';



export const IntroLeft = () => {
  const handleClick = () => {
    const phoneNumber = '7488453568';
    const message = 'Hello, I want to connect about the project.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank'); // Opens WhatsApp in a new tab or app
  };
  return (
    <div className="w-full bg-white min-h-screen flex items-center justify-center p-4">
    <div className="flex flex-col items-center">
      <h3 className="text-center text-[14px] sm:text-[20px] p-2">
        Building your dreams
      </h3>
      <h1 className="text-center text-[24px] sm:text-[40px] p-2">
        <Typewriter
          options={{
            strings: ['Real Estate Design in Jamshedpur Crafted with love By @Mazhar'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <div className='mt-[20px] flex flex-row item-center' onClick={handleClick}>
        <h2 className='mt-[20px]'>Connect us</h2>

        <img class ='ms-[20px] h-[60px] w-[60px]' src={anim}/>
      </div>
      {/* <Player
  src='https://assets1.lottiefiles.com/packages/lf20_myejiggj.json'
  className="player w-full h- [200px]"
  loop
  autoplay
  speed={10}
/> */}
      
    </div>

  </div>
  
  );
};
