import React from 'react'

export const ImageWritter = () => {
  return (
    <div className="w-full h-full p-[40px] mt-[20px] rounded-lg relative">
    <img
      className="rounded-lg w-full h-full object-cover"
      src="https://images.unsplash.com/flagged/photo-1553028826-ccdfc006d078?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Sample"
    />
    <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
    Build Your Dream wit us
    </div>
  </div>
  
  )
}
