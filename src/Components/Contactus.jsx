













// import React from 'react';
// import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
// import { MdPhoneIphone } from "react-icons/md";

// const ContactPage = () => {
//   return (
//     <div className="max-w-screen-xl lg:mx-auto mx-5 flex p-4">
//       <div className="bg-white p-8 w-full">
//         <h1 className="text-4xl font-bold text-[#DFA627] mb-8  mx-20">
//           PLAN AN UNFORGETTABLE JOURNEY AT
//           <span className="text-[#DFA627]"> KALPANA</span>
//         </h1>
//         <div className="flex flex-col lg:flex-row lg:space-x-8 mb-8 mx-20">
//           <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center lg:items-start  ">
//             <h2 className="text-2xl font-bold mb-2">CONTACT DETAILS</h2>
//             <p className="mb-1 flex font-bold text-xl">
//               <MdPhoneIphone className="mt-1 text-xl" /> +91 1234 56789
//             </p>
//             <p className="mb-4 flex font-bold text-xl">
//               <MdPhoneIphone className="mt-1 text-xl" /> +91 1234 56789
//             </p>
//             <div className="flex space-x-4 mb-4">
//               <span className="w-8 h-8 bg-[#F4E37C] text-xl rounded-full flex items-center justify-center text-white">
//                 <FaYoutube />
//               </span>
//               <span className="w-8 h-8 bg-[#F4E37C] text-xl rounded-full flex items-center justify-center text-white">
//                 <FaFacebookF />
//               </span>
//               <span className="w-8 h-8 bg-[#F4E37C] text-xl rounded-full flex items-center justify-center text-white">
//                 <FaInstagram />
//               </span>
//             </div>
//             <div className="w-full max-w-md flex flex-col space-y-4">
//               <div className="border border-gray-300 p-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
//                 <h1>Name</h1>
//               </div>
//               <div className="border border-gray-300 p-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
//                 <h1>Phone Number</h1>
//               </div>
//               <div className="border border-gray-300 p-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
//                 <h1>Email ID</h1>
//               </div>
//               <div className="border border-gray-300 p-3 h-20 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
//                 <h1>Your Message</h1>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-[#DFA627] text-white py-2 rounded font-bold hover:bg-yellow-500 mt-4"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.092780392934!2d73.12784367438915!3d25.535286217925755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39426726f39ce933%3A0x97a8883469238d40!2sHotel%20Chanoud%20Garh!5e0!3m2!1sen!2sin!4v1722494972367!5m2!1sen!2sin"
//               width="100%"
//               height="500"
//               style={{ border: '4px solid black' }}
//               allowFullScreen=""
//               loading="lazy"
//               title="Hotel Chanoud Garh"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;


































import React from 'react';
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="bg-white p-8 w-full">
        <h1 className="text-xl lg:text-4xl font-bold text-[#DFA627] lg:mb-8 mb-5 text-center lg:text-left lg:mx-20 mx-0">
          PLAN AN UNFORGETTABLE JOURNEY AT
          <span className="text-[#DFA627]"> KALPANA</span>
        </h1>
        <div className="flex flex-col lg:flex-row lg:space-x-8 mb-8 lg:mx-20 mx-0">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <h2 className="text-xl lg:text-2xl font-bold mb-2 text-center lg:text-left">CONTACT DETAILS</h2>
            <p className="mb-1 flex font-bold text-lg lg:text-xl">
              <MdPhoneIphone className="mt-1 text-lg lg:text-xl" /> +91 1234 56789
            </p>
            <p className="mb-4 flex font-bold text-lg lg:text-xl">
              <MdPhoneIphone className="mt-1 text-lg lg:text-xl" /> +91 1234 56789
            </p>
            <div className="flex space-x-4 mb-4">
              <span className="w-6 h-6 lg:w-8 lg:h-8 bg-[#F4E37C] text-base lg:text-xl rounded-full flex items-center justify-center text-white">
                <FaYoutube />
              </span>
              <span className="w-6 h-6 lg:w-8 lg:h-8 bg-[#F4E37C] text-base lg:text-xl rounded-full flex items-center justify-center text-white">
                <FaFacebookF />
              </span>
              <span className="w-6 h-6 lg:w-8 lg:h-8 bg-[#F4E37C] text-base lg:text-xl rounded-full flex items-center justify-center text-white">
                <FaInstagram />
              </span>
            </div>
            <div className="w-full max-w-md flex flex-col space-y-4">
              <div className="border border-gray-300 p-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <h1 className="text-sm lg:text-base">Name</h1>
              </div>
              <div className="border border-gray-300 p-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <h1 className="text-sm lg:text-base">Phone Number</h1>
              </div>
              <div className="border border-gray-300 p-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <h1 className="text-sm lg:text-base">Email ID</h1>
              </div>
              <div className="border border-gray-300 p-3 h-20 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <h1 className="text-sm lg:text-base">Your Message</h1>
              </div>
              <button
                type="submit"
                className="bg-[#DFA627] text-white py-2 rounded font-bold hover:bg-yellow-500 mt-4"
              >
                Send
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.092780392934!2d73.12784367438915!3d25.535286217925755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39426726f39ce933%3A0x97a8883469238d40!2sHotel%20Chanoud%20Garh!5e0!3m2!1sen!2sin!4v1722494972367!5m2!1sen!2sin"
              width="100%"
              height="500" 
              style={{ border: '4px solid black' }}
              allowFullScreen=""
              loading="lazy"
              title="Hotel Chanoud Garh"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
