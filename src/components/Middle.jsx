import React from 'react'



export const Middle = () => {
  const list = [
    {
      img: "https://images.unsplash.com/photo-1532197894789-9865bcdbc277?q=80&w=3426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1678712506929-b8fa924c9f21?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1670011072722-e2d6036a57c5?q=80&w=3247&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="mt-10 w-full">
      {/* Header Section */}
      <h1 className="font-serif text-[30px] md:text-[50px] text-left px-4 md:px-10 w-auto">
        Transform Your Space with Archis
      </h1>
      <p className="text-left px-4 md:px-10 font-sans text-sm md:text-base font-light tracking-wide text-slate-600">
        In our cool natural-themed architecture project, we integrate natural
        elements such as wood, stone, and natural lighting to create a soothing
        and refreshing environment.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-10 rounded-l-lg mt-6">
        {list.map((item, index) => (
          <div
            key={index}
            className="w-full h-[280px] sm:h-[360px] rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={item.img}
              alt={`Architecture image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
