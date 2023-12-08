// import React from "react";
// import details from "./details";

// const ProjectCardAccount = () => {
//   const handleWhatsAppPay = () => {
//     const stripeLink = "https://buy.stripe.com/test_14k8zE9C60G9al24gg";
//     const message = `Hey, I want to make a payment. Here's the link: ${stripeLink}`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
//     window.open(whatsappLink);
//   };

//   return (
//       <div className="mb-5 grid grid-cols-4 gap-4 justify-center">
//         {details.map((item) => (
//           <div className=" bg-gray-700 gap-3 flex  basis-1/2 justify-start border-4 items-start
//         sm:space-x-3 flex-wrap" key={item.key}>
//             <img
//               src={item.src}
//               alt={item.alt}
//               className="rounded-xl h-64 w-full object-cover"
//             />
//             <h5>{item.heading}</h5>
//             <h5>{item.personName}</h5>
//             <h5>{item.fundDetails}</h5>
//             <div className="flex justify-between py-3 px-3">
//               <button onClick={handleWhatsAppPay}>Share</button>
//               <button
//                 onClick={() =>
//                   (window.location.href =
//                     "https://buy.stripe.com/test_14k8zE9C60G9al24gg")
//                 }
//               >
//                 Donate
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//   );
// };

// export default ProjectCardAccount;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";
import { daysRemaining,  } from '../store'

const ProjectAccount = () => {

  const [forms, setForms] = useState([]);
  const expired = new Date().getTime() > Number(forms?.expiresAt + '000')

  useEffect(() => {
    axios.get('http://localhost:3001/getForms')
      .then(response => setForms(response.data))
      .catch(err => console.log(err));
  }, []);
  

  const handleWhatsAppPay = () => {
    const stripeLink = "https://donate.stripe.com/test_aEU5mt5qi6So1Ko288";
    const message = `Hey, I want to make a payment. Here's the link: ${stripeLink}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappLink);
  };

  return (
    <div className="my-5 grid grid-cols-4 gap-4 justify-center">
      {forms.map(form => (
        <div key={form._id} className="bg-white gap-3 rounded-xl flex basis-1/2 justify-start border-2 items-start sm:space-x-3 flex-wrap">
          <img
            src={form.image}
            alt={form.image}  // Fix: Access form.image instead of projectData.image
            className="rounded-xl h-64 w-full object-cover"
          />
          <div className='grid mb-4'>
            <h5 className='mt-2 text-2xl italic font-semibold'>
              <span className='text-pink-500'>Name:</span> {form.username}
            </h5>
            <h5 className='mt-2 font-thin text-sm'>
              <span className="text-pink-500">description:</span> {form.cause}
            </h5>
            <h5 className="text-pink-500 mt-2">
              <span className="text-xl font-medium">cost</span>: 
              <span className='text-gray-700'>$</span>
              <span className='text-green-400'>{form.estimatedAmount}.00</span>
              </h5>
            <small className="text-gray-500 mt-1">
              {expired ? 'Expired' : daysRemaining(form.expiresAt) + ' left'}
            </small>
            </div>
          <div className="flex  space-x-4 py-3 px-3">
            <div className="ml-2.5 inline-block px-6 py-2.5 bg-orange-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg
            focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">
            <button className='' onClick={handleWhatsAppPay}>Share</button>
            </div>
            <a href="https://donate.stripe.com/test_aEU5mt5qi6So1Ko288"><button className='ml-10 inline-block px-6 py-2.5 bg-orange-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg
            focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out'>
              Donate
            </button></a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectAccount;
