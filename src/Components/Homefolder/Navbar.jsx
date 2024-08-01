import React, {useEffect, useState, useRef,} from 'react'
import { useLocation } from 'react-router-dom';
import loogo from '../../../public/loogo.png';
import img1 from '../../../public/img1.png';
import img2 from '../../../public/img2.png';
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
import { IoCloseOutline } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Navbar = () => {

  //   const [isSideMenuOpen, setMenu] = useState(false);

  // useEffect(() => {
  //   setMenu(false);
  // }, []);



  const [isSideMenuOpen, setMenu] = useState(false);
  const location = useLocation();
  useEffect(()=> {
setMenu(false);
  }, [location])
  return (
    <>
         <div style={{ fontFamily: "Century Gothic" }} className="w-full">

         <div style={{ position: "relative" }}>

         <NavLink to="/">
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
        </NavLink>


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

             <NavLink to="/" className="font-bold">
          HOME
             </NavLink>
            
              <NavLink to="/allcompanies" className="font-bold">ALL COMPANIES</NavLink>
              <NavLink to="/aboutus" className="font-bold">ABOUT US</NavLink>
          <NavLink to='/Contactus' className="font-bold">CONTACT US</NavLink>
              <Link className="font-bold">OUR BLOGS</Link>
              <Link  className="font-bold"> CONNECT WITH US</Link>

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

         </div>
         </div>
    </>
  )
}

export default Navbar
