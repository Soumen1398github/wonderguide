import React from "react";
import { Link } from "react-router-dom";

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
];

function ResponsiveCard() {
  return (
    <div className="relative pt-5 p-2">
      <div className="flex flex-col gap-5 container mx-auto max-sm:mr-0">
      <Link to="/view-tour-details/:id" >
        <div className="grid gap-10 border border-blue-100 rounded-2xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-2 transition duration-300 ease-in-out !shadow-blue-400    bg-white p-6 pb-10 ring ring-gray-950/5 dark:bg-gray-950 dark:ring-white/10 md:grid-cols-2 lg:px-20 lg:py-8">
          <div className="flex flex-1 flex-col">
            {/* Image Grid */}
            {/* <div className="relative mb-4 overflow-hidden rounded-lg md:hidden">
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
            </div> */}

            {/* Text Details */}
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] xl:grid-cols-1">
            <span className="hidden text-3xl font-semibold text-gray-950 dark:text-white sm:block">
            Himachal Tour Trek
                </span>
              <span className="hidden font-medium text-xl text-gray-500 dark:text-gray-500 sm:block">
              Nestled in the heart of Himachal, Manali offers stunning views of snow-capped peaks, lush valleys, and thrilling adventure activities.
            </span>
                <div className=" w-2/3 flex justify-between">
                    <div>From:<span>Delhi</span></div>
                    <div>To:<span>Shimla</span></div>
                </div>
              <div>Tour Time: <span>07/03/2015, 8:00 AM</span></div>
              <div className=" w-2/3 flex justify-between">
                    <div>Available Tickets:<span>18</span></div>
                    <div>Ticket Price:<span>₹12000</span></div>
                </div>
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
        </Link>
       <Link to="/view-tour-details/:id" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 rounded-2xl border border-blue-100
        hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-2 transition duration-300 ease-in-out !shadow-blue-400 bg-white p-6 pb-10 ring ring-gray-950/5 dark:bg-gray-950 dark:ring-white/10 lg:px-20 lg:py-8">
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
            <span className="hidden text-3xl font-semibold text-gray-950 dark:text-white sm:block">
            Hyderabad Tour Trek
                </span>
              <span className="hidden font-medium text-xl text-gray-500 dark:text-gray-500 sm:block">
              A historic gem in the heart of Hyderabad, Charminar stands tall with its iconic architecture, bustling markets, and rich cultural charm.
            </span>
                <div className=" w-2/3 flex justify-between">
                    <div>From:<span>Kolkata</span></div>
                    <div>To:<span>Hyderabad</span></div>
                </div>
              <div>Tour Time: <span>07/03/2015, 9:00 AM</span></div>
              <div className=" w-2/3 flex justify-between">
                    <div>Available Tickets:<span>30</span></div>
                    <div>Ticaket Price:<span>₹10000</span></div>
                </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default ResponsiveCard;
