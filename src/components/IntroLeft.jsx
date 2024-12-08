import React from 'react'
import anim from '../assest/whatsapp.gif'
import videoBackground from '../assest/background.mp4'
import image from '../assest/logo.png'



export const IntroLeft = () => {
  const handleClick = () => {
    const phoneNumber = '7488453568';
    const message = 'Hello, I want to connect about the project.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank'); // Opens WhatsApp in a new tab or app
  };
  return (
    <div className="w-full h-screen bg-white min-h-screen flex items-center justify-center p-4 video-background relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      <div className="relative z-10 flex flex-col items-center content text-white text-center">
      <img src={image}/>
        <h3 className="text-[14px] sm:text-[20px] p-2">
          Building your dreams
        </h3>

        <h1 className="text-[24px] sm:text-[40px] p-2">
      
          Real Estate Design in Jamshedpur Crafted with love By @Mazhar
        </h1>

        <div className="mt-[20px] flex flex-row items-center" onClick={handleClick}>
          <h2 className="mt-[20px]">Connect us</h2>
          <img className="ms-[20px] h-[60px] w-[60px]" src={anim} alt="connect" />
        </div>
      </div>
    </div>
  );
};
