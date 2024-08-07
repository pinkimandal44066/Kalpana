// import React from 'react'
import React, { useRef, useState } from 'react';

import img3 from '../../public/img3.png';

// import img5 from '../../public/img5.png';

import img21 from '../../public/img21.png';
import img33 from '../../public/img33.png';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
// import img22 from '../../../public/img22.png';
// import img26 from '../../../public/img26.png';
// import img27 from '../../../public/img27.png';
// import img28 from '../../../public/img28.png';
// import img29 from '../../../public/img29.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


import Slider from './Homefolder/Slider';
import { NavLink } from 'react-router-dom';

const Kalpanacolorbank = () => {
  return (
    <>
      <div>
<ul className='flex items-center justify-center lg:space-x-10  md:space-x-10  mt-4
sm:space-x-7 space-x-5  max-w-screen-xl mx-auto'>
<li className="font-bold">ABOUT</li>
<li className="font-bold">AMENITIES</li>
              <li className="font-bold">GALLERY</li>
              <li className="font-bold"> OFFER</li>
</ul>





<div className="flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10 lg:ml-32 
 max-w-screen-xl mx-auto lg:mx-20 sm:mt-0 mt-0 md:mt-0 lg:-mt-12 2xl:-mt-14  xl:-mt-14">
  <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m">
    <img src={img33} alt="" className="lg:w-[80%] lg:mt-20 md:-mt-10 sm:-mt-0 " />
  </div>
  <div className="lg:w-1/2 px-4 order-2 lg:order-1">
  <h1 className="text-3xl font-bold mb-2 lg:mt-20 md:mt-0  -mt-4">
                  <span className="text-2xl  mb-2 lg:mt-20 md:mt-0 bg-[#DFA627] -mt-4 font-semibold rounded-md p-1">
                    KALPANA
                  </span>{" "}
                  FITNESS
                </h1>
    {/* <h1 className="text-3xl font-bold mb-2 lg:mt-20 md:mt-0 bg-[#DFA627] -mt-4">KALPANA <span>INN</span></h1> */}
    <p className="text-sm mb-4">
    With ‘Namaste’ as the enduring symbol of its brand experience and 
‘Responsible Luxury’ as the guiding premise, HOTEL GRAND are an archetype of the culture and ethos of each destination offering authentic, indigenous luxury experiences which are in harmony with the environment and society.
Discover a symphony of flavors crafted by passionate chefs, tantalizing your taste buds with every bite. Immerse yourself in a haven of luxury where comfort meets elegance. Whether savoring exquisite meals or unwinding in lavish accommodations, our establishment promises an unforgettable experience.
    </p>
  
    <div>
        <NavLink to='/kalpanamarble'>
      <button className="text-black flex border-2 bg-[#DFA627] shadow-2xl font-semibold py-1.5 px-6 mt- rounded-sm lg:mx-0 mx-auto">
        Call Now
      </button>
      </NavLink>
    </div>
  </div>
</div>



 





{/* PART2 */}









<div className='bg-[#091D33]  lg:mt-20 md:mt-6 sm:mt-4 mt-6 text-white'>
  
<div className='flex   flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10  lg:ml-32 
max-w-screen-xl mx-auto lg:mx-20 sm:mt-0 mt-0 md:mt-0 2xl:mx-40   lg:-mt-12 2xl:-mt-14  xl:-mt-14  '>

<div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m -mt-24 ">

<h1 className="lg:text-3xl md:text-3xl  sm:text-3xl  text-2xl font-bold mb-2 lg:-mt-14 md:mt-24  mx-0 xl:mt-4
 sm:mt-24 mt-28 lg:ml-20  xl:ml-36 2xl:ml-44  ">FACILITATES AVAILABLE </h1>
  
<img src={img21} alt="" className="lg:w-[80%] lg:-mt-0 md:mt-6 sm:mt-4 mx-" />

</div>


<div className="lg:w-1/2 px-4 order-2 lg:order-1 ">
<div className='items-center justify-between flex'>

<h1 className="text-3xl font-bold mb-2 lg:mt-14 md:-mt-5 -mt-4">A WELL-EQUIPPED GYM</h1>



</div>

<p className="text-base mb-4">
1. Cardio Machines: Treadmills, ellipticals, stationary bikes, and rowing machines.

<p className='text-base
'>2. Strength Training Equipment: Free weights, weight machines, and resistance bands.Standard rooms: These rooms are typically equipped with a double bed, air conditioning, and a TV.
</p>
<p className='text-base'>
 3. Functional Training Area: Space for exercises like kettlebell workouts, TRX, and bodyweight exercises.

</p>

<p  className='text-base'>
4. Group Fitness Studios: Rooms for classes like yoga, pilates, and spinning.
</p>

<p>

5. Locker Rooms: Secure lockers, showers, and changing areas.
</p>

<p>
  6. Recovery Zone: Areas with foam rollers, stretching mats, and possibly massage chairs.
</p>

<p>
  7. Staffed Reception: For membership inquiries and support.
</p>
<p>
  8. Refreshments: Water stations.
</p>
</p>











</div>

</div>

<div className='flex justify-between items-center lg:mx-44 text-3xl '>
<HiOutlineArrowNarrowLeft />
  <HiOutlineArrowNarrowRight className='lg:mr-6' />
  </div>
</div>








{/* PART3 */}


<Slider />




{/* <div className='max-w-screen-xl lg:mx-40 mx-5 mt-10'>
  <img src={img22} alt=''/>
</div> */}











{/* PART4 */}



{/* <>
      <Swiper
        slidesPerView={3}
        spaceBetween={-480}
        freeMode={true}
        pagination={{
          clickable: true,
        }}

        className="mySwiper justify-center items-center "
      >
      
        <SwiperSlide>Slide 3
        <div className="flex-none w-1/3">
              <img src={img27} alt="" className="w-full h-auto" />
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4
        <div className="flex-none w-1/3">
              <img src={img28} alt="" className="w-full h-auto" />
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 5
        <div className="flex-none w-1/3">
              <img src={img29} alt="" className="w-full h-auto" />
            </div>
        </SwiperSlide>
       

        <SwiperSlide>Slide 5
        <div className="flex-none w-1/3">
              <img src={img29} alt="" className="w-full h-auto" />
            </div>
        </SwiperSlide>

        <SwiperSlide>Slide 5
        <div className="flex-none w-1/3">
              <img src={img29} alt="" className="w-full h-auto" />
            </div>
        </SwiperSlide>

        <SwiperSlide>Slide 5
        <div className="flex-none w-1/3">
              <img src={img29} alt="" className="w-full h-auto" />
            </div>
        </SwiperSlide>
      </Swiper>
    </> */}







</div>
    </>
  )
}

export default Kalpanacolorbank
