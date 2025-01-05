import React from 'react'



export const Middle = () => {
  const list = [
    {
      img: "https://cloud.appwrite.io/v1/storage/buckets/676d2683002ec8ba8547/files/677ab5e7002a8ed03e4b/view?project=676d263e00386ae44d7d&project=676d263e00386ae44d7d&mode=admin",
    },
    {
      img: "https://cloud.appwrite.io/v1/storage/buckets/676d2683002ec8ba8547/files/677ab64500314bd0726a/view?project=676d263e00386ae44d7d&project=676d263e00386ae44d7d&mode=admin",
    },
    {
      img: "https://cloud.appwrite.io/v1/storage/buckets/676d2683002ec8ba8547/files/677ab623002f44799669/view?project=676d263e00386ae44d7d&project=676d263e00386ae44d7d&mode=admin",
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
