import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import img20 from '../../public/img20.png';
const Footer = () => {
  return (
    <>
      <div className="lg:mt-4 md:mt-1 sm:mt-4 mt-8">
        <div className="bg-[#091D33] text-white py-8">
          <div className="max-w-screen-xl lg:mx-20 mx-5 md:mx-10 lg:px-20 md:px-20 flex flex-col md:flex-row">
            <div className="w-full lg:w-[40%] md:w-[990px] mb-6 md:mb-0 ">
              <img
                src={img20}
                alt=""
                className="w-32 lg:mx-0 md:mx-0 sm:mx-64 mx-24 "
              />

              <p className="text-sm mt-2">
                From providing excellent accommodation at competitive prices,
                delivering the best customer service from our restaurant,
                meeting the client requirements for immaculate marbles & tiles
                to helping people sumptuously decorate their walls with our
                paints,
                <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">
                  Kalpana
                </span>{" "}
                Group has succeeded in every business segment.
              </p>

              <h1 className="mt-3 lg:mx-0 md:mx-0 sm:mx-52 sm:text-2xl mx-20 text-sm md:text-base">
                CONNECT WITH US
              </h1>

              <div
                className="flex mt-3 sm:gap-7 lg:text-2xl text-4xl md:text-2xl md:gap-4
        sm:mx-64 mx-20 lg:mx-0 gap-4 md:mx-0"
              >
                <div className="bg-black rounded-full">
                  <IoLogoYoutube />
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
              <h3 className="text-lg font-semibold border-white pb-2">
                ABOUT US
              </h3>
              <ul className="text-sm">
                <li className="mb-2">About Us</li>
                <li className="mb-2">Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="w-full lg:w-48 md:w-[800px] sm:w-[680px] mb-6 md:mb-0  lg:block md:block hidden">
              <h3 className="text-lg font-semibold border-white pb-2">
                OUR COMPANIES
              </h3>
              <ul>
                <li className="mb-2">
                  <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">
                    Kalpana
                  </span>{" "}
                  Inn
                </li>
                <li className="mb-2">Javed Habib</li>
                <li className="mb-2">
                  <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">
                    Kalpana
                  </span>{" "}
                  Steel & Marble
                </li>
                <li className="mb-2">
                  <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">
                    Kalpana
                  </span>{" "}
                  Color Bank
                </li>
                <li className="mb-2">
                  <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">
                    Kalpana
                  </span>{" "}
                  Furniture
                </li>
                <li className="mb-2">
                  <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">
                    Kalpana
                  </span>{" "}
                  Builder
                </li>
              </ul>
            </div>

            <div className="lg:hidden md:hidden  block flex justify-between mt-4 sm:mx-20 ">
              <div className="lg:w-32 md:w-96 sm:w-72 w-60 mx-4 ">
                <h3 className="text-lg font-semibold border-white pb-2">
                  ABOUT US
                </h3>
                <ul className="text-sm">
                  <li className="mb-2">About Us</li>
                  <li className="mb-2">Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              <div className="w-full lg:w-48 md:w-[550px] sm:w-[520px] mb-6 md:mb-0">
                <h3 className="text-lg font-semibold border-white pb-2">
                  OUR COMPANIES
                </h3>
                <ul>
                  <li className="mb-2">
                    <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">
                      Kalpana
                    </span>{" "}
                    Inn
                  </li>
                  <li className="mb-2">Javed Habib</li>
                  <li className="mb-2">
                    <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">
                      Kalpana
                    </span>{" "}
                    Steel & Marble
                  </li>
                  <li className="mb-2">
                    <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">
                      Kalpana
                    </span>{" "}
                    Color Bank
                  </li>
                  <li className="mb-2">
                    <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">
                      Kalpana
                    </span>{" "}
                    Furniture
                  </li>
                  <li className="mb-2">
                    <span className="bg-[#DFA627] text-black p-1 text-sm font-semibold rounded-md">
                      Kalpana
                    </span>{" "}
                    Builder
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-80 md:mx-full sm:block hidden">
                <h3 className="text-lg font-semibold border-white pb-2">
                  USEFUL LINKS
                </h3>
                <ul>
                  <li className="mb-2">Store Locations</li>
                  <li className="mb-2">Business Partner</li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-80 md:mx-full -mt-32 lg:-mt-0 md:-mt-0 sm:hidden lg:block md:block ">
              <h3 className="text-lg font-semibold border-white pb-2">
                USEFUL LINKS
              </h3>
              <ul>
                <li className="mb-2">Store Locations</li>
                <li className="mb-2">Business Partner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
