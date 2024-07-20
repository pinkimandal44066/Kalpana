import React from 'react'
import Group from '../../../public/Group.png';
import Mobilegroup from '../../../public/Mobilegroup.png';
import img4 from '../../../public/img4.png';
import Hironmoy from '../../../public/Hironmoy.png';
import img36 from '../../../public/img36.png';
import img37 from '../../../public/img37.png';
import img38 from '../../../public/img38.png';
import img5 from '../../../public/img5.png';
import img19 from '../../../public/img19.png';
import img18 from '../../../public/img18.png';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import  { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Aboutus = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10 lg:ml-32 
 max-w-screen-xl mx-auto lg:mx-20 sm:mt-0 mt-0 md:mt-0 lg:-mt-12 2xl:-mt-14  xl:-mt-14">
  <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m">
    <img src={img36} alt="" className="lg:w-[100%] lg:mt-4 md:-mt-10 sm:-mt-0 " />
  </div>
  <div className="lg:w-1/2 px-4 order-2 lg:order-1">

    <h1 className="text-3xl font-bold mb-2 lg:mt-20 md:mt-0 text-[#F4E37C] -mt-4"> OUR STORY</h1>
   
    <p className="text-sm mb-4 capitalize-text"> <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">
                  KALPANA
                  </span>
              Group is the brainchild of a visionary entrepreneur Mr. Hironmoy Das and his family members.
Fuelled by his passion for business and a desire to make a difference, he embarked on a
journey to create a company that would touch the lives of people in diverse ways. With unwavering determination,
 he laid the foundation of 
 <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">
                  KALPANA
                  </span> Group - a company that would soon
become a household name. Since its inception, it has transformed from a small family
business with only three employees into a strong and reputed company. Over the years, the
company has grown to operate in numerous in Durgapur, becoming one of
the biggest Hotel industry in Durgapur.
    </p>
  
    <div>
     
    
    
      
    </div>
  </div>
</div>
      <img src={Group} alt="" className="lg:h-full  sm:h-full lg:block md:block sm:block hidden"/>
<img src={Mobilegroup} alt="" className="lg:hidden md:hidden sm:hidden block"/>



{/* part2 */}



<Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
       <SwiperSlide>    
    
    <div className=" lg:block md:block sm:block hidden">
    <img src={img4} alt="" className="w-full  lg:mt-16  md:mt-[90px] sm:mt-[70px]" />
    
    <div className="flex justify-center items-center md:-ml-5 sm:ml-5 ">
      
<img src={Hironmoy} alt="" className=" lg:w-[900px] lg:-mt-[122px] md:-mt-[136px] sm:-mt-[101px] " />

</div>


    
    </div>
    </SwiperSlide>



    <SwiperSlide>    
    
    <div className=" lg:block md:block sm:block hidden">
    <img src={img4} alt="" className="w-full  lg:mt-16  md:mt-[90px] sm:mt-[70px]" />
    
    <div className="flex justify-center items-center md:-ml-5 sm:ml-5 ">
      
<img src={Hironmoy} alt="" className=" lg:w-[900px] lg:-mt-[122px] md:-mt-[136px] sm:-mt-[101px] " />

</div>


    
    </div>
    </SwiperSlide>



      </Swiper>



     {/* Mobile part  */}


<img className='lg:hidden md:hidden sm:hidden block' src={img37} alt='' />


    </>
  )
}

export default Aboutus


