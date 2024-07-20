import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import img22 from "../../../public/img22.png";
import img23 from "../../../public/img23.png";
import img24 from "../../../public/img24.png";
import img25 from "../../../public/img25.png";
import img26 from '../../../public/img26.png';
import img27 from '../../../public/img27.png';
import img28 from '../../../public/img28.png';
import img29 from '../../../public/img29.png';
import img34 from '../../../public/img34.png';

import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../index.css";

// import React, { useRef, useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
// import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const handleButtonClick = () => {
    if (thumbsSwiper) {
      thumbsSwiper.slideNext(); 
    }
  };

  return (
    <div>
      <div className="lg:-mt-4  md:-mt-14 sm:-mt-14 -mt-20">
        <div className="max-w-screen-xl lg:mx-auto mx-5">
          <div className="flex justify-center items-center   w-full h-screen">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={0}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="main-swiper"
            >
              
              <SwiperSlide>
                <img className="slide-image" src={img22} alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img23} alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img24} alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img22} alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img25} alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img22} alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img24} alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img25} alt="Nature 1" />
              </SwiperSlide>
            </Swiper>
          </div>

          <button onClick={handleButtonClick} className="btn  ">
          
          <div className="flex gap-3     lg:ml-16  static lg:-mt-0 -mt-">
          <MdArrowBackIosNew  className=""/>
          <MdArrowForwardIos />
          </div>  
          
         </button>
          <div className="ml-[15%] -mt-20  h-screen">
        
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="thumb-swiper"
            >
    
  
              <SwiperSlide>
          
              <img className="slide-image" src={img22} alt="Nature 1" />
           
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img24} alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img25} alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img23} alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img25} alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img24} alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img23} alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-image" src={img22} alt="Nature 1" />
              </SwiperSlide>



              
            </Swiper>





{/* PART2 */}
       {/* <div className="mt-6">
     
     
       </div>
       <img src={img26} alt="" className="w-96"/>

       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
      
        className="mySwiper"
      >
        
        <SwiperSlide>
        <img src={img27} alt="" className="h-full w-80 "/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img27} alt="" className="h-full w-80"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img27} alt="" className="h-full w-80"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img27} alt="" className="h-full w-80"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img27} alt="" className="h-full w-80"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img27} alt="" className="h-full w-80"/>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="flex gap-10 -mt-10">
          
          <img src={img27} alt="" className="h-full w-80"/>
          <img src={img28} alt="" className="h-full w-80"/>
          <img src={img29} alt="" className="h-full w-80"/>
        </div>
        </SwiperSlide>
      </Swiper> */}


      <img className="mt-5 " src={img34} alt=""/>
          </div>


         
{/* 
<div className="">
  <button onClick={handleButtonClick} className="btn absolute top-[343%]  2xl:top-[500%] left-0">
    <div className="flex gap-3 ml-16 static">
      <MdArrowBackIosNew className=" bg-red-700" />
      <MdArrowForwardIos />
    </div>
  </button>
  <div className="ml-[15%] -mt-20 mb-80">
    <Swiper
      onSwiper={setThumbsSwiper}
      loop={true}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="thumb-swiper"
    >
      <SwiperSlide>
        <img className="slide-image" src={img22} alt="Nature 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img24} alt="Nature 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img25} alt="Nature 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img23} alt="Nature 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img25} alt="Nature 5" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img24} alt="Nature 6" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img23} alt="Nature 7" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide-image" src={img22} alt="Nature 8" />
      </SwiperSlide>
    </Swiper>
  </div>
</div> */}

        </div>
      </div>

    
    </div>




  );
}

// export default Slider






























// import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Thumbs } from "swiper/core"; // Update import for SwiperCore and specific modules
// // import "swiper/swiper-bundle.css"; // Import main Swiper bundle CSS
// // import "swiper/components/navigation/navigation.min.css"; // Import Swiper navigation module CSS
// // import "swiper/components/thumbs/thumbs.min.css"; // Import Swiper thumbs module CSS
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";
//  import "swiper/css";
// import "swiper/css/free-mode";
//  import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "../../index.css";

// import img22 from "../../../public/img22.png";
// import img23 from "../../../public/img23.png";
// import img24 from "../../../public/img24.png";
// import img25 from "../../../public/img25.png";

// SwiperCore.use([Navigation, Thumbs]); // Initialize SwiperCore with Navigation and Thumbs modules

// export default function App() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   const handleButtonClick = () => {
//     if (thumbsSwiper) {
//       thumbsSwiper.slideNext(); // Example: slides to the next slide
//     }
//   };

//   return (
//     <div>
//       <div className="bg-[#FFF3E9] mt-5">
//         <div className="max-w-screen-xl lg:mx-auto mx-5">
//           <div className="flex justify-center items-center w-full h-screen">
//             <Swiper
//               loop={true}
//               spaceBetween={0}
//               navigation={true} // Enable navigation
//               thumbs={{ swiper: thumbsSwiper }}
//               className="main-swiper"
//             >
//               <SwiperSlide>
//                 <img className="slide-image" src={img22} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img23} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img24} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img22} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img25} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img22} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img24} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img25} alt="Nature 1" />
//               </SwiperSlide>
//             </Swiper>
//           </div>
//           <div className="ml-[15%] -mt-14 mb-80">
//             {/* Button to trigger the thumb-swiper functionality */}
//             <button onClick={handleButtonClick} className="btn">
//               Next Slide
//             </button>
//             <Swiper
//               onSwiper={setThumbsSwiper}
//               loop={true}
//               spaceBetween={10}
//               slidesPerView={4}
//               freeMode={true}
//               watchSlidesProgress={true}
//               className="thumb-swiper"
//             >
//               <SwiperSlide>
//                 <img className="slide-image" src={img22} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img24} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img25} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img23} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img25} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img24} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img23} alt="Nature 1" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img className="slide-image" src={img22} alt="Nature 1" />
//               </SwiperSlide>
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
