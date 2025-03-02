import React from "react";


const images = [
  "https://instahimachal.com/wp-content/uploads/2021/12/10-Best-winter-destinations-in-Himachal-1200-x-675-px.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsnBsu67P0519g3G2v-bL63Azf9YxaA4fgg&s",
  "https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/destination/m_Landscape_l_400_640.jpg",
  "https://cdn.pixabay.com/photo/2017/08/06/13/44/sea-2593343_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/06/28/02/56/cottage-2455817_1280.jpg",
];
const images1 = [
    "https://hyderabadtourpackage.in/images/places-to-visit/charminar-hyderabad-entryfee-timings-tour-package-small.jpg",
    "https://www.hyderabadtourpackages.com/wp-content/uploads/2018/08/Golconda-Fort-5-350x200.jpg",
    "https://www.trawell.in/admin/images/upload/090985240Bidar_Main.jpg",
]

function ResponsiveCard() {
  return (
    <div className="relative pt-5 p-2">
      <div className="container mx-auto max-sm:mr-0">
        <div className="grid gap-10 rounded-t-2xl bg-white p-6 pb-10 ring ring-gray-950/5 dark:bg-gray-950 dark:ring-white/10 md:grid-cols-2 lg:px-20 lg:py-8">
          <div className="flex flex-1 flex-col">
            {/* Image Grid */}
            <div className="relative mb-4 overflow-hidden rounded-lg md:hidden">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
                <img
                  src={images[0]}
                  alt=""
                  className="col-span-2 h-48 w-full rounded-lg bg-gray-950/5 object-cover sm:h-40"
                />
                <img
                  src={images[1]}
                  alt=""
                  className="hidden h-48 w-full rounded-lg bg-gray-950/5 object-cover sm:block md:col-span-1 sm:h-40"
                />
                <img
                  src={images[2]}
                  alt=""
                  className="hidden h-48 w-full rounded-lg bg-gray-950/5 object-cover md:block sm:h-40"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-gradient-to-b from-transparent via-transparent to-gray-950 p-6 sm:hidden">
                <span className="text-sm font-semibold text-white/80">
                  Entire house
                </span>
                <span className="text-xl font-semibold text-white">
                  Beach House on Lake Huron
                </span>
              </div>
            </div>

            {/* Text Details */}
            <span className="hidden font-medium text-gray-500 dark:text-gray-500 sm:block">
              Entire house
            </span>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] xl:grid-cols-1">
              <div>
                <span className="hidden text-3xl font-semibold text-gray-950 dark:text-white sm:block">
                  Beach House on Lake Huron
                </span>
                <span className="mt-2 flex gap-2">
                  <span className="flex items-center gap-1 text-pink-600 dark:text-pink-500">
                    ⭐<span className="text-sm font-medium">4.8</span>
                  </span>
                  <span className="text-sm text-gray-500">(185 reviews)</span>
                  <span className="text-pink-300 dark:text-gray-600">·</span>
                  <span className="text-sm font-medium text-pink-600 dark:text-pink-500">
                    Bayfield, ON
                  </span>
                </span>
              </div>
              <div className="lg:hidden">
                <button className="w-full rounded-lg bg-pink-500 px-3 py-2 text-sm font-bold text-white sm:w-auto">
                  Check availability
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 xl:max-w-md line-clamp-2">
              This sunny and spacious room is for those traveling light and
              looking for a comfy and cozy place to lay their head for a
              night...
            </p>
            <span className="mt-3 inline-block text-sm font-semibold text-pink-600 dark:text-pink-500">
              Show more
            </span>

            {/* Availability Button */}
            <div className="mt-6 hidden lg:block">
              <button className="w-auto rounded-lg bg-pink-500 px-3 py-2 text-sm font-bold text-white">
                Check availability
              </button>
            </div>
          </div>

          {/* Desktop Image Grid */}
          <div className="hidden grid-cols-4 grid-rows-2 gap-2 lg:grid">
            <img
              src={images[0]}
              alt=""
              className="col-span-4 h-[150px] w-full rounded-lg bg-gray-950/5 object-cover xl:col-span-2 xl:row-span-2 xl:h-[308px] xl:aspect-square"
            />
            <img
              src={images[1]}
              alt=""
              className="col-span-2 h-[150px] w-full rounded-lg bg-gray-950/5 xl:aspect-square"
            />
            <img
              src={images[2]}
              alt=""
              className="col-span-2 h-[150px] w-full rounded-lg bg-gray-950/5 xl:aspect-square"
            />
            <div className=" md:hidden">
              <img
                src={images[3]}
                alt=""
                className="size-[150px] rounded-lg bg-gray-950/5 object-cover"
              />
              <img
                src={images[4]}
                alt=""
                className="size-[150px] rounded-lg bg-gray-950/5 object-cover"
              />
            </div>
          </div>
        </div>




        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 rounded-t-2xl bg-white p-6 pb-10 ring ring-gray-950/5 dark:bg-gray-950 dark:ring-white/10 lg:px-20 lg:py-8">
      {/* Left - Images Grid */}
      <div className="hidden grid-cols-4 grid-rows-2 gap-2 lg:grid">
            <img
              src={images1[0]}
              alt=""
              className="col-span-4 h-[150px] w-full rounded-lg bg-gray-950/5 object-cover xl:col-span-2 xl:row-span-2 xl:h-[308px] xl:aspect-square"
            />
            <img
              src={images1[1]}
              alt=""
              className="col-span-2 h-[150px] w-full rounded-lg bg-gray-950/5 xl:aspect-square"
            />
            <img
              src={images1[2]}
              alt=""
              className="col-span-2 h-[150px] w-full rounded-lg bg-gray-950/5 xl:aspect-square"
            />
            <div className=" md:hidden">
              <img
                src={images1[3]}
                alt=""
                className="size-[150px] rounded-lg bg-gray-950/5 object-cover"
              />
              <img
                src={images1[4]}
                alt=""
                className="size-[150px] rounded-lg bg-gray-950/5 object-cover"
              />
            </div>
          </div>

      {/* Right - Text Content */}
      <div className="flex flex-col justify-between">
        {/* Details */}
        <div className="flex flex-col gap-4">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-500">
            Entire house
          </span>
          <h2 className="text-3xl font-semibold text-gray-950 dark:text-white">
            Beach House on Lake Huron
          </h2>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-pink-600 dark:text-pink-500">
              ⭐<span className="text-sm font-medium">4.8</span>
            </span>
            <span className="text-sm text-gray-500">(185 reviews)</span>
            <span className="text-pink-300 dark:text-gray-600">·</span>
            <span className="text-sm font-medium text-pink-600 dark:text-pink-500">
              Bayfield, ON
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            This sunny and spacious room is for those traveling light and
            looking for a comfy and cozy place to lay their head for a
            night...
          </p>
          <span className="mt-3 inline-block text-sm font-semibold text-pink-600 dark:text-pink-500 cursor-pointer">
            Show more
          </span>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button className="w-auto rounded-lg bg-pink-500 px-3 py-2 text-sm font-bold text-white">
            Check availability
          </button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default ResponsiveCard;
