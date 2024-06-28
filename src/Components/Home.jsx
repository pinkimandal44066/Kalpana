import React, { useEffect, useState, useRef } from "react";
import logoo from "../../public/logoo.png";
import img1 from "../../public/img1.png";
import img2 from "../../public/img2.png";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import img3 from "../../public/img3.png";
import img4 from "../../public/img4.png";
import img5 from "../../public/img5.png";
import img6 from "../../public/img6.png";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import  { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLongArrowAltRight } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";





import img7 from "../../public/img7.png";
import img8 from "../../public/img8.png";
import img9 from "../../public/img9.png";
import img10 from "../../public/img10.png";
import img11 from "../../public/img11.png";
import img12 from "../../public/img12.png";
import img13 from "../../public/img13.png";
import img14 from "../../public/img14.png";
import img15 from "../../public/img15.png";
import img16 from "../../public/img16.png";
import img17 from "../../public/img17.png";
import img18 from "../../public/img18.png";
import img19 from "../../public/img19.png";
import img20 from "../../public/img20.png";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import loogo from "../../public/loogo.png";
import hotel from "../../public/hotel.png";
import hotel1 from "../../public/hotel1.png";
import hotel2 from "../../public/hotel2.png";
import hotel3 from "../../public/hotel3.png";
import hotel0 from "../../public/hotel0.png";
import hotel01 from "../../public/hotel01.png";
import newimg from "../../public/newimg.png";
import allhotel from '../../public/allhotel.png';
import Hironmoy from '../../public/Hironmoy.png';
import Group from '../../public/Group.png';
import Mobilegroup from '../../public/Mobilegroup.png';
import newgroup from '../../public/newgroup.jpeg';
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
          className="lg:left-20 left-6 sm:left-12"
          src={loogo}
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
            className="absolute lg:top-5 top-5 right-6 md:top-6 md:right-10 lg:right-20 sm:top-6 sm:right-16 p-
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
            className="fixed h-screen w-full z-[999] font-Poppins cursor-pointer bg-[#091D33] bg-opacity-50 
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

              <Link className="font-bold">HOME</Link>
              <Link className="font-bold">ALL COMPANIES</Link>
              <Link className="font-bold">ABOUT US</Link>
              <Link className="font-bold">CONTACT US</Link>
              <Link className="font-bold">OUR BLOGS</Link>
              <Link className="font-bold"> CONNECT WITH US</Link>

              <div className="flex justify-center mt-0 sm:gap-7 lg:text-2xl text-4xl md:text-2xl md:gap-4 sm:mx-64 mx-20 lg:mx-0 gap-4 md:mx-0 text-center">
                <div className="rounded-full">
                  <IoLogoYoutube />
                </div>
                <div className="rounded-full">
                  <FaFacebook />
                </div>
                <div className="rounded-full">
                  <FaInstagramSquare />
                </div>
              </div>
            </section>
          </div>
        )}

      

        {/* PART2 */}

        <div className=" bg-[#091D33] lg:h-60 md:60 h-[345px] sm:h-[280px] overflow-hidden  ">
          <div className=" lg:mx-32 md:mx-32 mx-5 sm:mx-20">
            <div className=" max-w-screen-xl lg:mx-auto   ">
              <h1 className="text-white font-semibold text-3xl lg:mb-2 md:mb-2  ">
                Explore
              </h1>
              <h1 className="text-[#DFA627] font-semibold lg:text-3xl md:text-3xl text-xl mt-3 ">
                <span className="text-black bg-[#DFA627]  rounded-xl p-2 lg:text-[#DFA627] lg:bg-[#091D33]">
                  KALPANA{" "}
                </span>
                GROUP PORTFOLIO
              </h1>
            </div>
            <div
              className="text-white text-sm lg:w-[800px]  md:w-[800px] w-[300px] lg:mx-10 mx-8 sm:w-[500px]
items-end justify-end items-center lg:float-right md:float-right mt-4 
 "
            >
              <p className="">
                Conceived in the year 2006,
                <span className="text-black bg-[#DFA627]  font-semibold rounded-sm p-1  ">
                  KALPANA
                </span>
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





{/* OLD SLIDER */}
       

        {/* <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="lg:block md:block hidden">
            <div className="flex justify-end items-center  ">
              <h1
                className="lg:mt-8 mt-6  lg:mx-32  md:mx-20 mx-6 font-bold lg:text-xl text-sm lg:hidden 
md:block md:text-xl "
              >
                EXPLORE OUR COMPANYS​
              </h1>
              <img
                src={img19}
                alt=""
                className="w-[300px]  lg:block md:block sm:block hidden  "
              />
              <img
                src={img19}
                alt=""
                className="w-[300px] lg:-ml-[90px] md:-ml-32 sm:-ml-28 -ml-[165px] "
              />
            </div>

            <img src={img4} alt="" className="w-full lg:mt-0 mt-4" />

            <div className="lg:mx-40 p-4 lg:-mt-[79px] md:-mt-4">
              <div className=" rounded-lg overflow-hidden">
                <div className="flex  md:flex-row ">
                  <div className="flex-1 p-4 ">
                    <h1 className="text-2xl font-bold lg:block md:hidden">
                      EXPLORE OUR COMPANYS
                    </h1>

                    <div className="mt-4">
                      <h2
                        className="lg:text-3xl md:text-3xl font-bold mb-2 mt-8 lg:mt-14 
       lg:mx-4 md:mx-5 mx-16 w-full "
                      >
                        HOTEL GRAND
                      </h2>

                      <p
                        className="mt-2 text-gray-600  md:w-[290px]
       lg:w-[400px] lg:text-base  ml-4  "
                      >
                        Its a sanctuary of elegance and comfort. From opulent
                        suites to impeccable service, we craft moments that
                        linger in your memory. Discover a world of culinary
                        delights at our restaurants, rejuvenate at our spa, or
                        host unforgettable events in our exquisite venues.
                      </p>
                      <img
                        src={img6}
                        alt=""
                        className="lg:w-6 md:w-5 w-8 lg:mt-2 lg:mx-5 md:mx-4 md:mt-2 mx-32 "
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <img
                      src={img5}
                      alt="Hotel Room"
                      className="w-full -rotate-6 lg:h-[420px]  md:-mt-14 md:h-[370px] lg:-mt-16 lg:-ml-10 
      -mt-8 h-full md:-ml-12 object-cover "
                    />
                  </div>

                  <div className="flex justify-between items-center p-4">
                    <button className="p-2 lg:mt-0  ">
                      <img
                        src={img3}
                        alt="Hotel Room"
                        className="w-80 lg:w-72 md:-mt-6 lg:-mt-0
    h-full "
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="-mt-[18px] ">
 
          <img src={img4} alt="" className="w-full lg:mt-40  mt-4" />

<div className="flex justify-center items-center -mt-[145px] lg:mx-20">
  <div>
    <img className="w-[65vw] h-[33vw] " src={hotel01} />
  </div>
  <div>
    <img
      className="w-[70vw] h-[30vw] lg:mt-10 p-8 lg:ml-10 "
      src={hotel3}
    />
  </div>
</div>
          
        </div>
          </SwiperSlide>
          


          <SwiperSlide>
          <div className="-mt-[80px]">
          <img src={img4} alt="" className="w-full lg:mt-40  mt-4" />

          <div className="flex justify-center items-center -mt-[145px]">
            <div>
              <img className="w-[65vw] h-[32vw] " src={hotel01} />
            </div>
            <div>
              <img
                className="w-[70vw] h-[30vw] lg:mt-12 p-8 ml-10 "
                src={hotel3}
              />
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="-mt-[80px]">
          <img src={img4} alt="" className="w-full lg:mt-40  mt-4" />

          <div className="flex justify-center items-center -mt-[145px]">
            <div>
              <img className="w-[65vw] h-[32vw] " src={hotel01} />
            </div>
            <div>
              <img
                className="w-[70vw] h-[30vw] lg:mt-12 p-8 ml-10 "
                src={hotel3}
              />
            </div>
          </div>
        </div>
          </SwiperSlide>


          
        </Swiper> */}





{/* new slider 28.06.2024 */}



<Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      
    
      {/* <SwiperSlide>    
    
    <div className=" lg:block md:block sm:block hidden">
    <img src={img4} alt="" className="w-full  lg:mt-16  md:mt-[50px] sm:mt-[70px]" />
    
    <div className="flex justify-center items-center md:-ml-5 sm:ml-5 ">
      
<img src={allhotel} alt="" className=" lg:w-[900px] lg:-mt-[126px] md:-mt-[110px] sm:-mt-[103px] " />

</div>


    
    </div>
    </SwiperSlide> */}



        <SwiperSlide>    
    
    <div className=" lg:block md:block sm:block hidden">
    <img src={img4} alt="" className="w-full  lg:mt-16  md:mt-[90px] sm:mt-[70px]" />
    
    <div className="flex justify-center items-center md:-ml-5 sm:ml-5 ">
      
<img src={allhotel} alt="" className=" lg:w-[900px] lg:-mt-[126px] md:-mt-[141px] sm:-mt-[103px] " />

</div>


    
    </div>
    </SwiperSlide>



      
      </Swiper>









        {/* Mobile part */}

        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide
            className="lg:hidden md:hidden sm:hidden block bg-cover bg-center h-[600px]  "
            style={{ backgroundImage: `url(${img5})` }}
          >
            <div className="flex justify-end items-center  ">
              <h1 className="lg:mt-8 mt-6  lg:mx-32 md:mx-32 mx-6 font-bold lg:text-xl text-sm ">
                EXPLORE OUR COMPANYS​
              </h1>
              <img
                src={img19}
                alt=""
                className="w-[300px]  lg:block md:block sm:block hidden  "
              />
              <img
                src={img19}
                alt=""
                className="w-[300px] lg:-ml-[90px] md:-ml-32 sm:-ml-28 -ml-[165px] "
              />
            </div>

            <img src={img4} alt="" className="w-full lg:mt-0 mt-4" />

            <div
              className="flex justify-center flex-col lg:flex-row  
         items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-40  mt-10 lg:mt-0"
            >
              <div className=" lg:w-1/2 px-4 order-2 lg:order-1 lg:mx-0 md:mx-0 mx-20 sm:mx-0">
                <h1 className="text-3xl font-bold mb-2 mt-8 lg:-mt-10 lg:mx-0 md:mx-0 mx-16 w-full">
                  Hotel Grand
                </h1>
                <p className="text-sm mb-4 w-80  lg:w-96 ">
                  It’s a sanctuary of elegance and comfort. From opulent suites
                  to impeccable service, we craft moments that linger in your
                  memory. Discover a world of culinary delights at our
                  restaurants, rejuvenate at our spa, or host unforgettable
                  events in our exquisite venues.
                </p>

                <img
                  src={img6}
                  alt=""
                  className="lg:w-5 md:w-5 w-10 lg:-mt-2 lg:mx-1 md:mx-1 mx-32 "
                />
              </div>

              <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m ">
                <img
                  src={img3}
                  alt=""
                  className="lg:w-[99%]  lg:mt-14 -mt-20 md:w-96 sm:w-80 w-72"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="lg:hidden md:hidden sm:hidden block bg-cover bg-center h-[600px]  "
            style={{ backgroundImage: `url(${img5})` }}
          >
            <div className="flex justify-end items-center  ">
              <h1 className="lg:mt-8 mt-6  lg:mx-32 md:mx-32 mx-6 font-bold lg:text-xl text-sm ">
                EXPLORE OUR COMPANYS​
              </h1>
              <img
                src={img19}
                alt=""
                className="w-[300px]  lg:block md:block sm:block hidden  "
              />
              <img
                src={img19}
                alt=""
                className="w-[300px] lg:-ml-[90px] md:-ml-32 sm:-ml-28 -ml-[165px] "
              />
            </div>

            <img src={img4} alt="" className="w-full lg:mt-0 mt-4" />

            <div
              className="flex justify-center flex-col lg:flex-row  
           items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-40  mt-10 lg:mt-0"
            >
              <div className=" lg:w-1/2 px-4 order-2 lg:order-1 lg:mx-0 md:mx-0 mx-20 sm:mx-0">
                <h1 className="text-3xl font-bold mb-2 mt-8 lg:-mt-10 lg:mx-0 md:mx-0 mx-16 w-full">
                  Hotel Grand
                </h1>
                <p className="text-sm mb-4 w-80  lg:w-96 ">
                  It’s a sanctuary of elegance and comfort. From opulent suites
                  to impeccable service, we craft moments that linger in your
                  memory. Discover a world of culinary delights at our
                  restaurants, rejuvenate at our spa, or host unforgettable
                  events in our exquisite venues.
                </p>

                <img
                  src={img6}
                  alt=""
                  className="lg:w-5 md:w-5 w-10 lg:-mt-2 lg:mx-1 md:mx-1 mx-32 "
                />
              </div>

              <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m ">
                <img
                  src={img3}
                  alt=""
                  className="lg:w-[99%]  lg:mt-14 -mt-20 md:w-96 sm:w-80 w-72"
                />
              </div>
            </div>
          </SwiperSlide>

         
        </Swiper>



{/* GROUP CODE HOME PAGE */}

        {/* <div className="bg-[#091D33]  mt-8 md: lg:-mt-[1px] lg:block md:block sm:block hidden">
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
          <img
            src={img10}
            className="w-full lg:-mt-[52%] md:-mt-[80%] sm:-mt-[100%] -mt-[210%]"
          />

          <div className="flex justify-center   gap-20  ">
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
          <img
            src={img10}
            className="w-full  lg:-mt-[52%] md:-mt-[80%] sm:-mt-[100%] -mt-[210%]"
          />
        </div>

        <div className=" lg:block md:block sm:block hidden">
          <div className="flex justify-center bg-[#091D33]   lg:h-[200px] md:h-[200px] sm:h-[200px] gap-20  ">
            <div>
              <img src={img15} className="w-32 " />
            </div>
            <img src={img11} className=" " />

            <div>
              <img src={img16} className="w-32 -mt-3 " />
            </div>
            <img src={img11} className=" " />
            <div>
              <img src={img17} className="w-32 " />
            </div>
          </div>
        </div> */}



<img src={Group} alt="" className="lg:h-full  sm:h-full lg:block md:block sm:block hidden"/>
<img src={Mobilegroup} alt="" className="lg:hidden md:hidden sm:hidden block"/>
        {/*GROUP HOME PAGE mobile */}
{/* 
        <div className="bg-[#091D33]   lg:hidden md:hidden sm:hidden block h-80">
          <div className="flex justify-center  gap-10 mx-2  ">
            <div>
              <img src={img7} className=" mt-4" />
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
          <img src={img10} className="w-full  h-1  -mt-[230%]" />

          <div className="flex justify-center  gap-10 mx-2  ">
            <div>
              <img src={img7} className="w- mt-4" />
            </div>
            <img src={img11} className="h-0 " />

            <div>
              <img src={img8} className="w- mt-4" />
            </div>
            <img src={img11} className="h-0 " />
            <div>
              <img src={img9} className="w- mt-4" />
            </div>
          </div>

          <img
            src={img10}
            className="w-full  lg:-mt-[58%] md:-mt-[88%] sm:-mt-[110%] -mt-[210%]"
          />
        </div> */}

        {/* <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="lg:block md:block hidden">
            <div className="flex justify-end items-center  ">
              <h1
                className="lg:mt-8 mt-6  lg:mx-32 md:mx-80 mx-6 font-bold lg:text-xl text-sm lg:hidden 
md:block md:text-xl "
              >
                MESSAGE
              </h1>
              <img
                src={img19}
                alt=""
                className="w-[300px]  lg:block md:block sm:block hidden  "
              />
              <img
                src={img19}
                alt=""
                className="w-[300px] lg:-ml-[90px] md:-ml-32 sm:-ml-28 -ml-[165px] "
              />
            </div>

            <img src={img4} alt="" className="w-full lg:mt-0 mt-4" />

            <div className="lg:mx-40 p-4 lg:-mt-[91px] md:-mt-4">
              <div className=" rounded-lg overflow-hidden">
                <div className="flex  md:flex-row">
                  <div className="flex-1 p-4">
                    <h1 className="text-2xl font-bold mt-3 lg:block md:hidden">
                      MESSAGE
                    </h1>

                    <div className="mt-4">
                      <h2
                        className="lg:text-3xl md:text-3xl font-bold mb-2 mt-8 lg:mt-14 
       lg:mx-4 md:mx-5 mx-16 w-full"
                      >
                        Mr. Hironmoy DAs
                      </h2>

                      <p className="mt-2 text-gray-600  lg:w-96  md:w-72 ml-4">
                        I am honored to extend a warm welcome to all of you,
                        whether you are a returning guest seeking the comforts
                        of Kalpana Inn or a new visitor about to embark on a
                        memorable experience. Kalpana Inn has a long and proud
                        tradition of hospitality. [Optional: Briefly mention the
                        inns history or a core value]. We are committed to
                        providing exceptional service, comfortable
                        accommodations, and a welcoming atmosphere that makes
                        you feel right at home.
                      </p>
                      <h1 className="lg:mx-36 md:mx-24 md:mt-3 mx-[118px]">
                        -Chairman
                      </h1>
                    </div>
                  </div>
                  <div className="flex-1">
                    <img
                      src={img5}
                      alt="Hotel Room"
                      className="w-full  -rotate-6 -mt-8 h-full object-cover"
                    />
                  </div>

                  <div className="flex justify-between items-center p-4">
                    <button className="p-2 lg:mt-24">
                      <img
                        src={img18}
                        alt="Hotel Room"
                        className="w-72 h-full"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>






          <SwiperSlide className="lg:block md:block hidden">
            <div className="flex justify-end items-center  ">
              <h1
                className="lg:mt-8 mt-6  lg:mx-32 md:mx-80 mx-6 font-bold lg:text-xl text-sm lg:hidden 
md:block md:text-xl "
              >
                MESSAGE
              </h1>
              <img
                src={img19}
                alt=""
                className="w-[300px]  lg:block md:block sm:block hidden  "
              />
              <img
                src={img19}
                alt=""
                className="w-[300px] lg:-ml-[90px] md:-ml-32 sm:-ml-28 -ml-[165px] "
              />
            </div>

            <img src={img4} alt="" className="w-full lg:mt-0 mt-4" />

            <div className="lg:mx-40 p-4 lg:-mt-[91px] md:-mt-4">
              <div className=" rounded-lg overflow-hidden">
                <div className="flex  md:flex-row">
                  <div className="flex-1 p-4">
                    <h1 className="text-2xl font-bold lg:block md:hidden">
                      MESSAGE
                    </h1>

                    <div className="mt-4">
                      <h2
                        className="lg:text-3xl md:text-3xl font-bold mb-2 mt-8 lg:mt-14 
       lg:mx-4 md:mx-5 mx-16 w-full"
                      >
                        Mr. Hironmoy DAs
                      </h2>

                      <p className="mt-2 text-gray-600  lg:w-96  md:w-72 ml-4">
                        I am honored to extend a warm welcome to all of you,
                        whether you are a returning guest seeking the comforts
                        of Kalpana Inn or a new visitor about to embark on a
                        memorable experience. Kalpana Inn has a long and proud
                        tradition of hospitality. [Optional: Briefly mention the
                        inns history or a core value]. We are committed to
                        providing exceptional service, comfortable
                        accommodations, and a welcoming atmosphere that makes
                        you feel right at home.
                      </p>
                      <h1 className="lg:mx-36 md:mx-24 md:mt-3 mx-[118px]">
                        -Chairman
                      </h1>
                    </div>
                  </div>
                  <div className="flex-1">
                    <img
                      src={img5}
                      alt="Hotel Room"
                      className="w-full  -mt-8 h-full object-cover"
                    />
                  </div>

                  <div className="flex justify-between items-center p-4">
                    <button className="p-2 lg:mt-12">
                      <img
                        src={img18}
                        alt="Hotel Room"
                        className="w-72 h-full"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="lg:block md:block hidden">
            <div className="flex justify-end items-center  ">
              <h1
                className="lg:mt-8 mt-6  lg:mx-32 md:mx-80 mx-6 font-bold lg:text-xl text-sm lg:hidden 
md:block md:text-xl "
              >
                MESSAGE
              </h1>
              <img
                src={img19}
                alt=""
                className="w-[300px]  lg:block md:block sm:block hidden  "
              />
              <img
                src={img19}
                alt=""
                className="w-[300px] lg:-ml-[90px] md:-ml-32 sm:-ml-28 -ml-[165px] "
              />
            </div>

            <img src={img4} alt="" className="w-full lg:mt-0 mt-4" />

            <div className="lg:mx-40 p-4 lg:-mt-[91px] md:-mt-4">
              <div className=" rounded-lg overflow-hidden">
                <div className="flex  md:flex-row">
                  <div className="flex-1 p-4">
                    <h1 className="text-2xl font-bold lg:block md:hidden">
                      MESSAGE
                    </h1>

                    <div className="mt-4">
                      <h2
                        className="lg:text-3xl md:text-3xl font-bold mb-2 mt-8 lg:mt-14 
       lg:mx-4 md:mx-5 mx-16 w-full"
                      >
                        Mr. Hironmoy DAs
                      </h2>

                      <p className="mt-2 text-gray-600  lg:w-96  md:w-72 ml-4">
                        I am honored to extend a warm welcome to all of you,
                        whether you are a returning guest seeking the comforts
                        of Kalpana Inn or a new visitor about to embark on a
                        memorable experience. Kalpana Inn has a long and proud
                        tradition of hospitality. [Optional: Briefly mention the
                        inns history or a core value]. We are committed to
                        providing exceptional service, comfortable
                        accommodations, and a welcoming atmosphere that makes
                        you feel right at home.
                      </p>
                      <h1 className="lg:mx-36 md:mx-24 md:mt-3 mx-[118px]">
                        -Chairman
                      </h1>
                    </div>
                  </div>
                  <div className="flex-1">
                    <img
                      src={img5}
                      alt="Hotel Room"
                      className="w-full  -mt-8 h-full object-cover"
                    />
                  </div>

                  <div className="flex justify-between items-center p-4">
                    <button className="p-2 lg:mt-12">
                      <img
                        src={img18}
                        alt="Hotel Room"
                        className="w-72 h-full"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="lg:block md:block hidden">
            <div className="flex justify-end items-center  ">
              <h1
                className="lg:mt-8 mt-6  lg:mx-32 md:mx-80 mx-6 font-bold lg:text-xl text-sm lg:hidden 
md:block md:text-xl "
              >
                MESSAGE
              </h1>
              <img
                src={img19}
                alt=""
                className="w-[300px]  lg:block md:block sm:block hidden  "
              />
              <img
                src={img19}
                alt=""
                className="w-[300px] lg:-ml-[90px] md:-ml-32 sm:-ml-28 -ml-[165px] "
              />
            </div>

            <img src={img4} alt="" className="w-full lg:mt-0 mt-4" />

            <div className="lg:mx-40 p-4 lg:-mt-[91px] md:-mt-4">
              <div className=" rounded-lg overflow-hidden">
                <div className="flex  md:flex-row">
                  <div className="flex-1 p-4">
                    <h1 className="text-2xl font-bold lg:block md:hidden">
                      MESSAGE
                    </h1>

                    <div className="mt-4">
                      <h2
                        className="lg:text-3xl md:text-3xl font-bold mb-2 mt-8 lg:mt-14 
       lg:mx-4 md:mx-5 mx-16 w-full"
                      >
                        Mr. Hironmoy DAs
                      </h2>

                      <p className="mt-2 text-gray-600  lg:w-96  md:w-72 ml-4">
                        I am honored to extend a warm welcome to all of you,
                        whether you are a returning guest seeking the comforts
                        of Kalpana Inn or a new visitor about to embark on a
                        memorable experience. Kalpana Inn has a long and proud
                        tradition of hospitality. [Optional: Briefly mention the
                        inns history or a core value]. We are committed to
                        providing exceptional service, comfortable
                        accommodations, and a welcoming atmosphere that makes
                        you feel right at home.
                      </p>
                      <h1 className="lg:mx-36 md:mx-24 md:mt-3 mx-[118px]">
                        -Chairman
                      </h1>
                    </div>
                  </div>
                  <div className="flex-1">
                    <img
                      src={img5}
                      alt="Hotel Room"
                      className="w-full  -mt-8 h-full object-cover"
                    />
                  </div>

                  <div className="flex justify-between items-center p-4">
                    <button className="p-2 lg:mt-12">
                      <img
                        src={img18}
                        alt="Hotel Room"
                        className="w-72 h-full"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        
        </Swiper> */}





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



        {/* <SwiperSlide>    
    
        <div className=" lg:block md:block sm:block hidden">
        <img src={img4} alt="" className="w-full  lg:mt-16  md:mt-[50px] sm:mt-[70px]" />
        
        <div className="flex justify-center items-center md:-ml-5 sm:ml-5 ">
          
  <img src={Hironmoy} alt="" className=" lg:w-[900px] lg:-mt-[122px] md:-mt-[108px] sm:-mt-[101px] " />
  
</div>


        
        </div>
        </SwiperSlide> */}



        {/* <SwiperSlide>     
        <div className="">
        <img src={img4} alt="" className="w-full  lg:mt-16" />
        <div className="flex justify-center items-center">
  <img src={allhotel} alt="" className=" w-[900px] -mt-[126px] " />
</div>

        
        </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>


        {/* mobile paet 2 */}

        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide
            className="lg:hidden md:hidden sm:hidden block"
            style={{
              backgroundImage: `url(${img5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex justify-end items-center">
              <h1 className="lg:mt-8 mt-6 lg:mx-32 md:mx-32 mx-28 font-bold lg:text-xl text-sm">
                MESSAGE
              </h1>
              <img
                src={img19}
                alt=""
                className="w-[300px] lg:block md:block sm:block hidden"
              />
              <img
                src={img19}
                alt=""
                className="w-[300px] lg:-ml-[90px] md:-ml-32 sm:-ml-28 -ml-[165px]"
              />
            </div>

            <img src={img4} alt="" className="w-full lg:mt-0 mt-4" />

            <div className="flex justify-center flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-40 mt-10 lg:mt-0">
              <div className="lg:w-1/2 px-4 order-2 lg:order-1 lg:mx-0 md:mx-0 mx-20 sm:mx-0">
                <h1 className="text-3xl font-bold mb-2 mt-0 lg:-mt-10 lg:mx-0 md:mx-0 mx-8 w-full">
                  Mr. Hironmoy DAs
                </h1>
                <p className="text-sm mb-4 w-80 lg:w-96">
                  I am honored to extend a warm welcome to all of you, whether
                  you are a returning guest seeking the comforts of Kalpana Inn
                  or a new visitor about to embark on a memorable experience.
                  Kalpana Inn has a long and proud tradition of hospitality.
                  [Optional: Briefly mention the inns history or a core value].
                  We are committed to providing exceptional service, comfortable
                  accommodations, and a welcoming atmosphere that makes you feel
                  right at home.
                </p>
                <h1 className="lg:mx-40 mx-[118px]">-Chairman</h1>
              </div>

              <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m">
                <img
                  src={img18}
                  alt=""
                  className="lg:w-[99%] lg:mt-14 -mt-14 md:w-96 sm:w-80 w-72"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="lg:hidden md:hidden sm:hidden block bg-cover bg-center"
            style={{ backgroundImage: `url(${img5})` }}
          >
            <div className="flex justify-end items-center">
              <h1 className="lg:mt-8 mt-6 lg:mx-32 md:mx-32 mx-28 font-bold lg:text-xl text-sm">
                MESSAGE
              </h1>
              <img
                src={img19}
                alt=""
                className="w-[300px] lg:block md:block sm:block hidden"
              />
              <img
                src={img19}
                alt=""
                className="w-[300px] lg:-ml-[90px] md:-ml-32 sm:-ml-28 -ml-[165px]"
              />
            </div>

            <img src={img4} alt="" className="w-full lg:mt-0 mt-4" />

            <div className="flex justify-center flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl mx-auto lg:mx-40 mt-10 lg:mt-0">
              <div className="lg:w-1/2 px-4 order-2 lg:order-1 lg:mx-0 md:mx-0 mx-20 sm:mx-0">
                <h1 className="text-3xl font-bold mb-2 mt-0 lg:-mt-10 lg:mx-0 md:mx-0 mx-8 w-full">
                  Mr. Hironmoy DAs
                </h1>
                <p className="text-sm mb-4 w-80 lg:w-96">
                  I am honored to extend a warm welcome to all of you, whether
                  you are a returning guest seeking the comforts of Kalpana Inn
                  or a new visitor about to embark on a memorable experience.
                  Kalpana Inn has a long and proud tradition of hospitality.
                  [Optional: Briefly mention the inns history or a core value].
                  We are committed to providing exceptional service, comfortable
                  accommodations, and a welcoming atmosphere that makes you feel
                  right at home.
                </p>
                <h1 className="lg:mx-40 mx-[118px]">-Chairman</h1>
              </div>

              <div className="lg:w-1/2 px-4 order-1 lg:order-2 sm:m">
                <img
                  src={img18}
                  alt=""
                  className="lg:w-[99%] lg:mt-14 -mt-14 md:w-96 sm:w-80 w-72"
                />
              </div>
            </div>
          </SwiperSlide>

         
        </Swiper>

        {/* Footer */}

        {/* <div className="mt-1">
  
<div className="bg-[#091D33] text-white py-8 ">
    <div className="max-w-screen-xl lg:mx-20  mx-5 lg:px-20 md:px-20  flex ">
        <div className="w-full lg:w-[40%] md:w-full mb-6 md:mb-0">
        <img src={img20} alt=""  className="w-32"/>
        
            <p className="text-sm mt-2">
                From providing excellent accommodation at competitive prices, delivering the best customer service from our restaurant,
                 meeting the client requirements for immaculate marbles & tiles to helping people sumptuously decorate 
                 their walls with our paints, <span className="bg-[#DFA627]  text-black p-1 text-sm font-semibold rounded-md">Kalpana</span> Group has succeeded in every business segment.
            </p>
            <h1 className="mt-3 text-xs">CONNECT WITH US</h1>
            <div className=" flex mt-3 gap-4 text-2xl ">
            <IoLogoYoutube  className="bg-[#DFA627] rounded-full  "/>
      <div  className="bg-[#DFA627] rounded-full">
      <FaFacebook  />
      </div>
      <div className="bg-[#DFA627] rounded-full">
        
      <FaInstagramSquare />
      </div>
            </div>
        </div>
        

        <div className="lg:w-32 md:w-96 sm:w-72 ">
            <h3 className="text-lg font-semibold  border-white pb-2 ">ABOUT US</h3>
            <ul className="text-sm">
              <li className="mb-2">About Us </li>
              <li  className="mb-2">Blog </li>
              <li>Contact Us</li>
            </ul>
            
        </div>
        <div className="w-full lg:w-48 md:w-[550px] sm:w-[680px] mb-6 md:mb-0">
            <h3 className="text-lg font-semibold  border-white pb-2 ">OUR COMPANYS</h3>
            <ul>
                <li  className="mb-2"><span className="bg-[#DFA627]  text-black p-1 text-sm font-semibold rounded-md">Kalpana</span>Inn</li>
                <li className="mb-2">Javed Habib</li>
                <li  className="mb-2"> <span className="bg-[#DFA627]  text-black p-1 text-sm font-semibold rounded-md">Kalpana</span>Steel & Marble</li>
                <li  className="mb-2"> <span className="bg-[#DFA627]  text-black p-1 text-sm font-semibold rounded-md">Kalpana</span>Color Bank</li>
                <li  className="mb-2"><span className="bg-[#DFA627]  text-black p-1 text-sm font-semibold rounded-md">Kalpana</span>Furniture</li>
                <li  className="mb-2"><span className="bg-[#DFA627]  text-black p-1 text-sm font-semibold rounded-md">Kalpana</span>Builder</li>
            </ul>

            
        </div>


      
        <div className="w-full lg:w-80 md:mx-full">
            <h3 className="text-lg font-semibold  border-white pb-2 ">USEFUL LINKS</h3>
            <ul>
                <li className="mb-2">Store Locations</li>
                <li className="mb-2">Business Partner</li>
            </ul>
        </div>
    </div>
    
</div>
</div> */}

        {/* <title>Hotel Grand</title>
   
<body class="">

    <section class="max-w-7xl mx-auto p-6">
        <div class=" overflow-hidden">
            <div class="px-6 py-4">
         
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2">
                        <h3 class="text-2xl font-semibold mb-2">HOTEL GRAND</h3>
                        <p class="text-gray-700 mb-4">
                            It's a sanctuary of elegance and comfort. From opulent suites to impeccable service, we craft moments that linger in your memory. Discover a world of culinary delights at our restaurants, rejuvenate at our spa, or host unforgettable events in our exquisite venues.
                        </p>
                   
     
                    </div>

                    <div class="md:w-1/3 mt-4 md:mt-0 md:flex justify-center">
                        
                        <img src={img5} class="w-full md:w-2/3" alt="Image 5"/>
                    </div>
    
                    <div class="md:w-1/2 mt-4 md:mt-0 md:ml-4">
                        <img src={img3} alt=""/>
                    </div>
      
                </div>

                
            </div>
        </div>
    </section>

</body> */}

        {/* 
<div className="lg:mt-14 md:mt-1 sm:mt-4 mt-8">
  <div className="bg-[#091D33] text-white py-8">
    <div className="max-w-screen-xl lg:mx-20 mx-5 md:mx-10 lg:px-20 md:px-20 flex flex-col md:flex-row">
      
      <div className="w-full lg:w-[40%] md:w-[990px] mb-6 md:mb-0 ">
        <img src={img20} alt="" className="w-32 lg:mx-0 md:mx-0 sm:mx-64 mx-24 " />
        
        <p className="text-sm mt-2">
          From providing excellent accommodation at competitive prices, delivering the best customer service from our restaurant, meeting the client requirements for immaculate marbles & tiles to helping people sumptuously decorate their walls with our paints,
          <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">Kalpana</span> Group has succeeded in every business segment.
        </p>
        
        <h1 className="mt-3 lg:mx-0 md:mx-0 sm:mx-52 sm:text-2xl mx-20 text-sm md:text-base">CONNECT WITH US</h1>
        
        <div className="flex mt-3 sm:gap-7 lg:text-2xl text-4xl md:text-2xl md:gap-4
        sm:mx-64 mx-20 lg:mx-0 gap-4 md:mx-0">
      <div className="bg-black rounded-full">
      <IoLogoYoutube  />
      </div>
          <div className="bg-black rounded-full">
            <FaFacebook />
          </div>
          <div className="bg-black rounded-full">
            <FaInstagramSquare />
            
          </div>
        </div>
      </div>
      
      <div className="lg:w-32 md:w-[500px] sm:w-72  lg:block md:block hidden">
        <h3 className="text-lg font-semibold border-white pb-2">ABOUT US</h3>
        <ul className="text-sm">
          <li className="mb-2">About Us</li>
          <li className="mb-2">Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      
      <div className="w-full lg:w-48 md:w-[800px] sm:w-[680px] mb-6 md:mb-0  lg:block md:block hidden">
        <h3 className="text-lg font-semibold border-white pb-2">OUR COMPANIES</h3>
        <ul>
          <li className="mb-2"><span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">Kalpana</span> Inn</li>
          <li className="mb-2">Javed Habib</li>
          <li className="mb-2"><span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">Kalpana</span> Steel & Marble</li>
          <li className="mb-2"><span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">Kalpana</span> Color Bank</li>
          <li className="mb-2"><span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">Kalpana</span> Furniture</li>
          <li className="mb-2"><span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">Kalpana</span> Builder</li>
        </ul>
      </div>
      






      <div className="lg:hidden md:hidden  block flex justify-between mt-4 sm:mx-20 ">
  <div className="lg:w-32 md:w-96 sm:w-72 w-60 mx-4 ">
    <h3 className="text-lg font-semibold border-white pb-2">ABOUT US</h3>
    <ul className="text-sm">
      <li className="mb-2">About Us</li>
      <li className="mb-2">Blog</li>
      <li>Contact Us</li>
    </ul>
  </div>

  <div className="w-full lg:w-48 md:w-[550px] sm:w-[520px] mb-6 md:mb-0">
    <h3 className="text-lg font-semibold border-white pb-2">OUR COMPANIES</h3>
    <ul>
      <li className="mb-2"><span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">Kalpana</span> Inn</li>
      <li className="mb-2">Javed Habib</li>
      <li className="mb-2"><span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">Kalpana</span> Steel & Marble</li>
      <li className="mb-2"><span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">Kalpana</span> Color Bank</li>
      <li className="mb-2"><span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">Kalpana</span> Furniture</li>
      <li className="mb-2"><span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">Kalpana</span> Builder</li>
    </ul>
  </div>

  <div className="w-full lg:w-80 md:mx-full sm:block hidden">
        <h3 className="text-lg font-semibold border-white pb-2">USEFUL LINKS</h3>
        <ul>
          <li className="mb-2">Store Locations</li>
          <li className="mb-2">Business Partner</li>
        </ul>
      </div>
</div>



 
      <div className="w-full lg:w-80 md:mx-full -mt-32 lg:-mt-0 md:-mt-0 sm:hidden lg:block md:block ">
        <h3 className="text-lg font-semibold border-white pb-2">USEFUL LINKS</h3>
        <ul>
          <li className="mb-2">Store Locations</li>
          <li className="mb-2">Business Partner</li>
        </ul>
      </div>
      





















   

    </div>

    
  </div>

  
</div> */}
{/* 
        <div>
          <img src={img4} alt="" className="w-full lg:mt-40  mt-4" />

          <div className="flex justify-center items-center -mt-[145px]">
            <div>
              <img className="w-[65vw] h-[34vw]" src={hotel01} />
            </div>
            <div>
              <img
                className="w-[70vw] h-[30vw] lg:mt-12 p-8 ml-10 "
                src={hotel3}
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
