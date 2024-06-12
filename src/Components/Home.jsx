import React, { useEffect, useState } from "react";
import logoo from "../../public/logoo.png";
import img1 from "../../public/img1.png";
import img2 from "../../public/img2.png";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import img3 from "../../public/img3.png";
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




<div className="max-w-screen-xl mx-auto flex justify-center items-center space-x-10 lg:flex md:flex hidden mt-2">
        <Link className="font-bold">ABOUT</Link>
        <Link className="font-bold">AMENITIES</Link>
        <Link className="font-bold">GALLERY</Link>
        <Link className="font-bold">OFFER</Link>
      </div>







{/* 

      <div className="flex justify-center items-center space-x-10 ">
       <div>
        <h1>Hotel Grand</h1>
        <p className="">With ‘Namaste’ as the enduring symbol of its brand experience and 
‘Responsible Luxury’ as the guiding premise, HOTEL GRAND are an archetype of the culture and ethos of each destination offering authentic, indigenous luxury experiences which are in harmony with the environment and society.
Discover a symphony of flavors crafted by passionate chefs, tantalizing your taste buds with every bite. Immerse yourself in a haven of luxury where comfort meets elegance. Whether savoring exquisite meals or unwinding in lavish accommodations, our establishment promises an unforgettable experience.</p>
       </div>
       <div>
        <img src={img3} alt="" className="lg:w-full" />
       </div>
      </div> */}


{/* <div className="flex flex-col lg:flex-row justify-center items-center 
 space-y-10 lg:space-y-0 lg:space-x-10  max-w-screen-xl  lg:mx-20
mx-auto " >

  <div className="lg:w-1/2 px-4">
    <h1 className="text-3xl font-bold mb-2 ">Hotel Grand</h1>
    <p className="text-sm">
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
  <div className="lg:w-1/2 px-4 ">
    <img src={img3} alt="" className="w-[90%] lg:mt-24" />
  </div>
</div> */}


<div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-20 mt-10">
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

    
<button
          className="text-black flex  border-2 bg-[#DFA627] 
   shadow-2xl 
  font-semibold py-1.5 px-6 mt- rounded-sm lg:mx-0 mx-auto
    "
        >
         Call Now
        </button>
  </div>
</div>




{/* <button
          className="text-black flex  border-2 bg-[#DFA627] 
   shadow-2xl 
  font-semibold py-1.5 px-6 mt- rounded-sm mx-auto 
    "
        >
         Call Now
        </button> */}

      </div>
    </div>
  );
};

export default Home;
