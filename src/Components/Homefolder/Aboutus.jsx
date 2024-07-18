import React from 'react'
import Group from '../../../public/Group.png';
import Mobilegroup from '../../../public/Mobilegroup.png';
import img4 from '../../../public/img4.png';
import Hironmoy from '../../../public/Hironmoy.png';
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

    </>
  )
}

export default Aboutus


