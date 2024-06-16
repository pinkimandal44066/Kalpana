import React, { useEffect, useState, useRef } from "react";
import logoo from "../../public/logoo.png";
import img1 from "../../public/img1.png";
import img2 from "../../public/img2.png";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import img3 from "../../public/img3.png";
import img4 from '../../public/img4.png';
import img5 from '../../public/img5.png';
import img6 from '../../public/img6.png';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import  { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLongArrowAltRight } from 'react-icons/fa';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css';
import img7 from '../../public/img7.png';
import img8 from '../../public/img8.png';
import img9 from '../../public/img9.png';
import img10 from '../../public/img10.png';
import img11 from '../../public/img11.png';
import img12 from '../../public/img12.png';
import img13 from '../../public/img13.png';
import img14 from '../../public/img14.png';
import img15 from '../../public/img15.png';
import img16 from '../../public/img16.png';
import img17 from '../../public/img17.png';
import img18 from '../../public/img18.png';
import img19 from '../../public/img19.png';
// import './styles.css';

// import required modules
// import { Pagination, Navigation } from 'swiper/modules';
// import { useLocation } from 'react-router-dom';

const Home = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, []);

  //   const location = useLocation();

  //   useEffect(() => {
  //     setMenu(false);
  //   }, [location]);




  return (
    <div style={{ fontFamily: "Century Gothic" }} className="w-full">
      <div style={{ position: "relative" }}>
        <img
          className="lg:left-20 left-6"
          src={logoo}
          alt=""
          style={{
            position: "absolute",
            // left: 20,
            top: "10px",
            height: "50px",
            cursor: "pointer",
            zIndex: 1,
          }}
        />

        <div style={{ position: "relative" }} className="w-full h-auto">
          <img
            className="w-full h-auto"
            src={img1}
            alt=""
            style={{ position: "relative" }}
          />

          <img
            className="w-full h-auto absolute top-[37%] sm:top-[21%] md:top-[18%] lg:top-[11%]"
            src={img2}
            alt=""
          />
        </div>

        <div className="left flex items-center">
          <div
            className="absolute lg:top-5 top-5 right-6 md:top-6 md:right-10 lg:right-20 sm:top-5 sm:right-10 p- 
           text-white rounded-full border"
          >
            <FiMenu
              onClick={() => setMenu(true)}
              className="lg:text-2xl md:text-2xl text-xl cursor-pointer "
            />
          </div>
        </div>

        {isSideMenuOpen && (
          <div
            className="fixed h-screen w-full z-[999] font-Poppins cursor-pointer bg-black bg-opacity-50 
           backdrop-blur-sm top-0 right-0"
          >
            <section
              className="text-black bg-gray-100 flex-col absolute left-0 top-0 h-screen 
             p-8 gap-8 z-50 w-full text-center flex"
            >
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="mt-3 mb-8 text-4xl text-white
                 rounded-full p-2 cursor-pointer bg-black absolute md:top-5 md:right-20 right-10 top-0 
                  lg:top-5 lg:right-32"
              />
              <Link className="font-bold">ABOUT</Link>
              <Link className="font-bold">AMENITIES</Link>
              <Link className="font-bold">GALLERY</Link>
              <Link className="font-bold">OFFER</Link>
            </section>
          </div>
        )}

        {/* <div className="max-w-screen-xl mx-auto flex justify-center items-center space-x-10 lg:flex md:flex hidden mt-2">
        <Link className="font-bold">ABOUT</Link>
        <Link className="font-bold">AMENITIES</Link>
        <Link className="font-bold">GALLERY</Link>
        <Link className="font-bold">OFFER</Link>
      </div> */}

        {/* PART2 */}

        <div className=" bg-black h-72  ">
          <div className=" lg:mx-32 md:mx-32 mx-5 ">
            <div className=" max-w-screen-xl lg:mx-auto   ">
              <h1 className="text-white font-semibold text-3xl lg:mb-2 md:mb-2 ">
                Explore
              </h1>
              <h1 className="text-[#DFA627] font-semibold lg:text-3xl md:text-3xl text-xl mt-3 ">
                <span className="text-black bg-[#DFA627]  rounded-xl p-2 lg:text-[#DFA627] lg:bg-black ">KALPANA </span>GROUP PORTFOLIO
              </h1>
            </div>
            <div
              className="text-white text-sm lg:w-[800px]  md:w-[800px] w-[300px] mx-10
items-end justify-end items-center lg:float-right md:float-right mt-4 
 "
            >
              <p className="">
                Conceived in the year 2006,
                <span className="text-black bg-[#DFA627]  font-semibold rounded-sm p-1 ">KALPANA</span>
       
                
                Group presently has become the well known brand with the tumover
                of over Rs 4 Crores. Located in Durgapur, West Bengal, India,
                The group is run by Chairman Mr. Hironmoy Das & Director Rakesh
                Das. It employs around 80 employees, who are at the heart of our
                company. The Supplier, Trader & Service Provider relies on their
                skills and knowledge of customer requirements.
              </p>
            </div>
          </div>
        </div>

        {/* PART3 */}
       <div className="flex justify-between items-center  ">
       <h1 className="lg:mt-8 mt-6  lg:mx-32 md:mx-32 mx-6 font-bold lg:text-xl text-sm ">EXPLORE OUR COMPANYS​</h1>
       <img src={img19} alt=""  className="w-[300px]  lg:block md:block sm:block hidden  "/>
       <img src={img19} alt=""  className="w-[300px] lg:-ml-[430px] md:-ml-32 sm:-ml-28 -ml-[165px] "/>
       </div>
    
        <img src={img4} alt=""  className="w-full lg:mt-0 mt-4"/>
        {/* <div className="flex flex-col lg:flex-row  
         items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-20 mt-10 lg:mt-0">
  <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m">
  
    <img src={img3} alt="" className="lg:w-[90%] lg:mt-24" />
  </div>
  <div className="lg:w-1/2 px-4 order-2 lg:order-1">
  
    <h1 className="text-3xl font-bold mb-2">Hotel Grand</h1>
    
    <p className="text-sm mb-4">
      With ‘Namaste’ as the enduring symbol of its brand experience and
      ‘Responsible Luxury’ as the guiding premise, HOTEL GRAND are an archetype
      of the culture and ethos of each destination offering authentic,
      indigenous luxury experiences which are in harmony with the environment
      and society. Discover a symphony of flavors crafted by passionate chefs,
      tantalizing your taste buds with every bite. Immerse yourself in a haven
      of luxury where comfort meets elegance. Whether savoring exquisite meals
      or unwinding in lavish accommodations, our establishment promises an
      unforgettable experience.
    
      
    </p>
    <div>  <img src={img5} alt="" className="w-10" /></div>
<div>  </div>
    
<button
          className="text-black flex  border-2 bg-[#DFA627] 
   shadow-2xl 
  font-semibold py-1.5 px-6 mt- rounded-sm lg:mx-0 mx-auto
    "
        >
         Call Now
        </button>
  </div>
</div> */}



  {/* isko bad me check krna hai */}

  
{/* <div className="flex justify-center flex-col lg:flex-row  
         items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-40 mt-10 lg:mt-0">
  <div  className=" px-4   ">
 
  <h1 className="text-3xl font-bold mb-2 mt-8">Hotel Grand</h1>
  <p className="text-sm mb-4 w-96">
      With ‘Namaste’ as the enduring symbol of its brand experience and
      ‘Responsible Luxury’ as the guiding premise, HOTEL GRAND are an archetype
      of the culture and ethos of each destination offering authentic,
      indigenous luxury experiences which are in harmony with the environment
      and society. Discover a symphony of flavors crafted by passionate chefs,
      tantalizing your taste buds with every bite. Immerse yourself in a haven
      of luxury where comfort meets elegance. Whether savoring exquisite meals
      or unwinding in lavish accommodations, our establishment promises an
      unforgettable experience.
    
      
    </p>
  </div>


  <div>  <img src={img5} alt="" className="w-80 -mt-28  -rotate-3" /></div>
  <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m">
  
  <img src={img3} alt="" className="lg:w-[99%] " />
</div>
</div> */}




<Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="flex justify-center flex-col lg:flex-row  
         items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-40  mt-10 lg:mt-0">
  <div  className=" lg:w-1/2 px-4 order-2 lg:order-1 lg:mx-0 md:mx-0 mx-20 sm:mx-0">
 
  <h1 className="text-3xl font-bold mb-2 mt-8 lg:-mt-10 lg:mx-0 md:mx-0 mx-16 w-full">Hotel Grand</h1>
  <p className="text-sm mb-4 w-80  lg:w-96 ">
  It’s a sanctuary of elegance and comfort. From opulent suites to 
impeccable service, we craft moments that linger in your memory. 
Discover a world of culinary delights at our restaurants, rejuvenate 
at our spa, or host unforgettable events in our exquisite venues.
    
      
    </p>

    <img src={img6} alt="" className="lg:w-5 md:w-5 w-8 lg:-mt-2 lg:mx-1 md:mx-1 mx-32 " />
  </div>


  {/* <div>  <img src={img5} alt="" className="w-80 -mt-28  -rotate-3 " /></div> */}
  <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m ">
  
  <img src={img3} alt="" className="lg:w-[99%]  lg:mt-14 -mt-10 md:w-96 sm:w-80 w-72" />
</div>
</div>

        </SwiperSlide>

       
        <SwiperSlide>
        <div className="flex justify-center flex-col lg:flex-row  
         items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-40  mt-10 lg:mt-0">
  <div  className=" lg:w-1/2 px-4 order-2 lg:order-1 lg:mx-0 md:mx-0 mx-20 sm:mx-0">
 
  <h1 className="text-3xl font-bold mb-2 mt-8 lg:-mt-10 lg:mx-0 md:mx-0 mx-16 w-full">Hotel Grand</h1>
  <p className="text-sm mb-4 w-80  lg:w-96 ">
  It’s a sanctuary of elegance and comfort. From opulent suites to 
impeccable service, we craft moments that linger in your memory. 
Discover a world of culinary delights at our restaurants, rejuvenate 
at our spa, or host unforgettable events in our exquisite venues.
    
      
    </p>

    <img src={img6} alt="" className="lg:w-5 md:w-5 w-8 lg:-mt-2 lg:mx-1 md:mx-1 mx-32 " />
  </div>


  {/* <div>  <img src={img5} alt="" className="w-80 -mt-28  -rotate-3 " /></div> */}
  <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m ">
  
  <img src={img3} alt="" className="lg:w-[99%]  lg:mt-14 -mt-10 md:w-96 sm:w-80 w-72" />
</div>
</div>

        </SwiperSlide>



        <SwiperSlide>
        <div className="flex justify-center flex-col lg:flex-row  
         items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-40  mt-10 lg:mt-0">
  <div  className=" lg:w-1/2 px-4 order-2 lg:order-1 lg:mx-0 md:mx-0 mx-20 sm:mx-0">
 
  <h1 className="text-3xl font-bold mb-2 mt-8 lg:-mt-10 lg:mx-0 md:mx-0 mx-16 w-full">Hotel Grand</h1>
  <p className="text-sm mb-4 w-80  lg:w-96 ">
  It’s a sanctuary of elegance and comfort. From opulent suites to 
impeccable service, we craft moments that linger in your memory. 
Discover a world of culinary delights at our restaurants, rejuvenate 
at our spa, or host unforgettable events in our exquisite venues.
    
      
    </p>

    <img src={img6} alt="" className="lg:w-5 md:w-5 w-8 lg:-mt-2 lg:mx-1 md:mx-1 mx-32 " />
  </div>


  {/* <div>  <img src={img5} alt="" className="w-80 -mt-28  -rotate-3 " /></div> */}
  <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m ">
  
  <img src={img3} alt="" className="lg:w-[99%]  lg:mt-14 -mt-10 md:w-96 sm:w-80 w-72" />
</div>
</div>

        </SwiperSlide>




        <SwiperSlide>
        <div className="flex justify-center flex-col lg:flex-row  
         items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-40  mt-10 lg:mt-0">
  <div  className=" lg:w-1/2 px-4 order-2 lg:order-1 lg:mx-0 md:mx-0 mx-20 sm:mx-0">
 
  <h1 className="text-3xl font-bold mb-2 mt-8 lg:-mt-10 lg:mx-0 md:mx-0 mx-16 w-full">Hotel Grand</h1>
  <p className="text-sm mb-4 w-80  lg:w-96 ">
  It’s a sanctuary of elegance and comfort. From opulent suites to 
impeccable service, we craft moments that linger in your memory. 
Discover a world of culinary delights at our restaurants, rejuvenate 
at our spa, or host unforgettable events in our exquisite venues.
    
      
    </p>

    <img src={img6} alt="" className="lg:w-5 md:w-5 w-8 lg:-mt-2 lg:mx-1 md:mx-1 mx-32 " />
  </div>


  {/* <div>  <img src={img5} alt="" className="w-80 -mt-28  -rotate-3 " /></div> */}
  <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m ">
  
  <img src={img3} alt="" className="lg:w-[99%]  lg:mt-14 -mt-10 md:w-96 sm:w-80 w-72" />
</div>
</div>

        </SwiperSlide>

      



{/* 
  <div className="swiper-button-next">
    <FaLongArrowAltRight />
  </div>
  <div className="swiper-button-prev">
    <FaLongArrowAltRight style={{ transform: 'rotate(180deg)' }} />
  </div> */}
</Swiper>




  <div className="bg-[#091D33]  mt-8  lg:block md:block sm:block hidden">
    
  <div className="flex justify-center  gap-20 ">
    <div>
    <img src={img7} className="w-32 " />

    </div>
    <img src={img11} className=" " />

    <div>
    <img src={img8} className="w-32 " />
    </div>
    <img src={img11} className=" " />
    <div>
    <img src={img9} className="w-32 " />
    </div>

    
  </div>
  <img src={img10} className="w-full lg:-mt-[58%] md:-mt-[88%] sm:-mt-[110%] -mt-[210%]"  />








  <div className="flex justify-center  gap-20  ">
    <div>
    <img src={img12} className="w-32 " />

    </div>
    <img src={img11} className=" " />

    <div>
    <img src={img13} className="w-32 " />
    </div>
    <img src={img11} className=" " />
    <div>
    <img src={img14} className="w-32 " />
    </div>

    
  </div>
  <img src={img10} className="w-full  lg:-mt-[58%] md:-mt-[88%] sm:-mt-[110%] -mt-[210%]" />



  </div>

 <div className=" lg:block md:block sm:block hidden">
 <div className="flex justify-center bg-[#091D33]   h-[132px] gap-20  ">
    <div>
    <img src={img15} className="w-32 " />

    </div>
    <img src={img11} className=" " />

    <div>
    <img src={img16} className="w-32 " />
    </div>
    <img src={img11} className=" " />
    <div>
    <img src={img17} className="w-32 " />
    </div>

    
  </div>
 </div>







{/* <div className="flex  mt-10 lg:hidden md:hidden block bg-[#091D33]   mb-20 items-center  justify-center   ">
        <Swiper
          slidesPerView={1}
          spaceBetween={80}
          freeMode={true}
          loop={true}
          pagination={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <img src={img7} className="w-32 mx-28 sm:mx-72 mt-10  " />
            <p className="text-white sm:mx-10 mx-6 mt-1">From Providing Excellent Accommodation At
Competitive Prices, Delivering The Best Customer
Service From Our Restaurant; Meeting The Client
Requirements For Immaculate Marbles & Tiles To
Helping People Sumptuously Decorate Their Walls
With Our Paints, Kalpana Group Has Succeeded
In Every Business Segment.</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} className="w-32 mx-28 sm:mx-72  mt-10  " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} className="w-32 mx-28 sm:mx-72  mt-10  " />
          </SwiperSlide>


          <SwiperSlide>
            <img src={img12} className="w-32 mx-28 sm:mx-72  mt-10 " />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img13} className="w-32 mx-28 sm:mx-72  mt-10  " />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img14} className="w-32 mx-28 sm:mx-72  mt-10 " />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img15} className="w-32 mx-28 sm:mx-72  mt-10  " />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img16} className="w-32 mx-28 sm:mx-72  mt-10 " />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img17} className="w-32 mx-28 sm:mx-72  mt-10 " />
          </SwiperSlide>
         
        </Swiper>
      </div> */}





{/* mobile */}


<div className="bg-[#091D33]  mt-10 lg:hidden md:hidden sm:hidden block h-80">
    
    <div className="flex justify-center  gap-10 mx-2  ">
      <div>
      <img src={img7} className=" mt-4" />
  
      </div>
      <img src={img11} className=" " />
      {/* <img src={img10} className=" " /> */}
  
      <div>
      <img src={img8} className="w- mt-4" />
      </div>
      <img src={img11} className=" " />
      <div>
      <img src={img9} className="w- mt-4" />
      </div>
  
      
    </div>
    {/* <img src={img10} className="w-full lg:-mt-[58%] md:-mt-[88%] sm:-mt-[110%] -mt-[210%]"  /> */}
  
    <img src={img10} className="w-full  h-1  -mt-[230%]" />
  
    <div className="flex justify-center  gap-10 mx-2  ">
      <div>
      <img src={img7} className="w- mt-4" />
  
      </div>
      {/* <img src={img10} className=" " /> */}
      <img src={img11} className=" " />
      <div>
      <img src={img8} className="w- mt-4" />
      </div>
      <img src={img11} className=" " />
      <div>
      <img src={img9} className="w- mt-4" />
      </div>
  
      
    </div>
    <img src={img10} className="w-full  h-1  -mt-[230%]" />

    <div className="flex justify-center  gap-10 mx-2  ">
      <div>
      <img src={img7} className="w- mt-4" />
  
      </div>
      <img src={img11} className=" " />
  
      <div>
      <img src={img8} className="w- mt-4" />
      </div>
      <img src={img11} className=" " />
      <div>
      <img src={img9} className="w- mt-4" />
      </div>
  
      
    </div>
  
   
  
  
    {/* <img src={img10} className="w-full  lg:-mt-[58%] md:-mt-[88%] sm:-mt-[110%] -mt-[210%]" /> */}
  
  
  
    </div>



















    <div className="flex justify-between items-center  ">
       <h1 className="lg:mt-8 mt-6  lg:mx-32 md:mx-32 mx-6 font-bold lg:text-xl text-sm ">Message​</h1>
       <img src={img19} alt=""  className="w-[300px]  lg:block md:block sm:block hidden  "/>
       <img src={img19} alt=""  className="w-[300px] lg:-ml-[430px] md:-ml-32 sm:-ml-28 -ml-[165px] "/>
       </div>
    
        <img src={img4} alt=""  className="w-full lg:mt-0 mt-4"/>



    <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="flex justify-center flex-col lg:flex-row  
         items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-40  mt-10 lg:mt-0">
  <div  className=" lg:w-1/2 px-4 order-2 lg:order-1 lg:mx-0 md:mx-0 mx-20 sm:mx-0">
 
  <h1 className="text-3xl font-bold mb-2 -mt-7 lg:-mt-40 lg:mx-0 md:mx-0 mx-8 w-full">Mr. Hironmoy DAs</h1>
  <p className="text-sm mb-4 w-80  lg:w-96 ">
  I am honored to extend a warm welcome to all of you, whether you are a returning
guest seeking the comforts of Kalpana Inn or a new visitor about to embark on a
memorable experience.
Kalpana Inn has a long and proud tradition of hospitality. [Optional: Briefly mention
the inns history or a core value]. We are committed to providing exceptional service,
comfortable accommodations, and a welcoming atmosphere that makes you feel
right at home.
    
      
    </p>
<h1 className="lg:mx-40 mx-28 ">-Chairman</h1>
    {/* <img src={img6} alt="" className="lg:w-5 md:w-5 w-8 lg:-mt-2 lg:mx-1 md:mx-1 mx-32 " /> */}
  </div>


  {/* <div>  <img src={img5} alt="" className="w-80 -mt-28  -rotate-3 " /></div> */}
  <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m ">
  
  <img src={img18} alt="" className="lg:w-[99%]  lg:mt-14 -mt-14 md:w-96 sm:w-80 w-72" />
</div>
</div>

        </SwiperSlide>

        <SwiperSlide>
        <div className="flex justify-center flex-col lg:flex-row  
         items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-40  mt-10 lg:mt-0">
  <div  className=" lg:w-1/2 px-4 order-2 lg:order-1 lg:mx-0 md:mx-0 mx-20 sm:mx-0">
 
  <h1 className="text-3xl font-bold mb-2 -mt-7  lg:-mt-40 lg:mx-0 md:mx-0 mx-8 w-full">Mr. Hironmoy DAs</h1>
  <p className="text-sm mb-4 w-80  lg:w-96 ">
  I am honored to extend a warm welcome to all of you, whether you are a returning
guest seeking the comforts of Kalpana Inn or a new visitor about to embark on a
memorable experience.
Kalpana Inn has a long and proud tradition of hospitality. [Optional: Briefly mention
the inns history or a core value]. We are committed to providing exceptional service,
comfortable accommodations, and a welcoming atmosphere that makes you feel
right at home.
    
      
    </p>
<h1 className="lg:mx-40 mx-28 ">-Chairman</h1>
    {/* <img src={img6} alt="" className="lg:w-5 md:w-5 w-8 lg:-mt-2 lg:mx-1 md:mx-1 mx-32 " /> */}
  </div>


  {/* <div>  <img src={img5} alt="" className="w-80 -mt-28  -rotate-3 " /></div> */}
  <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m ">
  
  <img src={img18} alt="" className="lg:w-[99%]  lg:mt-14 -mt-14 md:w-96 sm:w-80 w-72" />
</div>
</div>

        </SwiperSlide>



        <SwiperSlide>
        <div className="flex justify-center flex-col lg:flex-row  
         items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-40  mt-10 lg:mt-0">
  <div  className=" lg:w-1/2 px-4 order-2 lg:order-1 lg:mx-0 md:mx-0 mx-20 sm:mx-0">
 
  <h1 className="text-3xl font-bold mb-2 -mt-7  lg:-mt-40 lg:mx-0 md:mx-0 mx-8 w-full">Mr. Hironmoy DAs</h1>
  <p className="text-sm mb-4 w-80  lg:w-96 ">
  I am honored to extend a warm welcome to all of you, whether you are a returning
guest seeking the comforts of Kalpana Inn or a new visitor about to embark on a
memorable experience.
Kalpana Inn has a long and proud tradition of hospitality. [Optional: Briefly mention
the inns history or a core value]. We are committed to providing exceptional service,
comfortable accommodations, and a welcoming atmosphere that makes you feel
right at home.
    
      
    </p>
<h1 className="lg:mx-40 mx-28 ">-Chairman</h1>
    {/* <img src={img6} alt="" className="lg:w-5 md:w-5 w-8 lg:-mt-2 lg:mx-1 md:mx-1 mx-32 " /> */}
  </div>


  {/* <div>  <img src={img5} alt="" className="w-80 -mt-28  -rotate-3 " /></div> */}
  <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m ">
  
  <img src={img18} alt="" className="lg:w-[99%]  lg:mt-14 -mt-14 md:w-96 sm:w-80 w-72" />
</div>
</div>

        </SwiperSlide>



        <SwiperSlide>
        <div className="flex justify-center flex-col lg:flex-row  
         items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-40  mt-10 lg:mt-0">
  <div  className=" lg:w-1/2 px-4 order-2 lg:order-1 lg:mx-0 md:mx-0 mx-20 sm:mx-0">
 
  <h1 className="text-3xl font-bold mb-2 -mt-7  lg:-mt-40 lg:mx-0 md:mx-0 mx-8 w-full">Mr. Hironmoy DAs</h1>
  <p className="text-sm mb-4 w-80  lg:w-96 ">
  I am honored to extend a warm welcome to all of you, whether you are a returning
guest seeking the comforts of Kalpana Inn or a new visitor about to embark on a
memorable experience.
Kalpana Inn has a long and proud tradition of hospitality. [Optional: Briefly mention
the inns history or a core value]. We are committed to providing exceptional service,
comfortable accommodations, and a welcoming atmosphere that makes you feel
right at home.
    
      
    </p>
<h1 className="lg:mx-40 mx-28 ">-Chairman</h1>
    {/* <img src={img6} alt="" className="lg:w-5 md:w-5 w-8 lg:-mt-2 lg:mx-1 md:mx-1 mx-32 " /> */}
  </div>


  {/* <div>  <img src={img5} alt="" className="w-80 -mt-28  -rotate-3 " /></div> */}
  <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m ">
  
  <img src={img18} alt="" className="lg:w-[99%]  lg:mt-14 -mt-14 md:w-96 sm:w-80 w-72" />
</div>
</div>

        </SwiperSlide>
      



{/* 
  <div className="swiper-button-next">
    <FaLongArrowAltRight />
  </div>
  <div className="swiper-button-prev">
    <FaLongArrowAltRight style={{ transform: 'rotate(180deg)' }} />
  </div> */}
</Swiper>






      </div>
    </div>
  );
};

export default Home;
