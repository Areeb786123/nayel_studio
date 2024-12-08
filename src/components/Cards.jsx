import React from 'react'
import localImager from '../assest/headerImage.png'
export const Cards = () => {
  const image = "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div class="relative p-5 mt-20 rounded-xl ">
      <img src={image} alt="Header" class="rounded-xl h-[500px] w-full max-w-full object-cover "/>
    </div>
  );
};