// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';
// import { daysRemaining,  } from '../store'

// const ProjectAccount = () => {
//   const { id } = useParams();

//   const [forms, setForms] = useState([]);
//   const expired = new Date().getTime() > Number(forms?.expiresAt + '000')

//   useEffect(() => {
//     axios.get('http://localhost:3001/getForms')
//       .then(response => setForms(response.data))
//       .catch(err => console.log(err));
//   }, []);

//   // useEffect(() => {
//   //   // Check if 'id' is available before making the request
//   //   if (id) {
//   //     axios.get(`http://localhost:3001/getForms/${id}`)
//   //       .then(response => setForms([response.data]))
//   //       .catch(err => console.log(err));
//   //   }
//   // }, [id]);
  

//   // const handleWhatsAppPay = () => {
//   //   const stripeLink = "https://donate.stripe.com/test_aEU5mt5qi6So1Ko288";
//   //   const message = `Hey, I want to make a payment. Here's the link: ${stripeLink}`;
//   //   const encodedMessage = encodeURIComponent(message);
//   //   const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
//   //   window.open(whatsappLink);
//   // };

//   return (

//     <div className="my-5 grid grid-cols-4 gap-4 justify-center ">
//       {forms.map(form => (
//         <div key={form._id} className="bg-white gap-3 rounded-xl sm:space-x-3 ">
//           <img
//             src={form.image}
//             alt={form.image}  // Fix: Access form.image 
//             className="rounded-xl h-64 w-full object-cover"
//           />
//           <div className='p-4'>
//             <div className='flex flex-col text-left'>
//               <h5 className='mt-2 text-2xl italic font-semibold text-black'>
//               {form.username}
//               </h5>
//               <p className='mt-2 font-thin text-lg text-black'>{form.tittle}</p>
//               <small className="text-gray-500 mt-1">
//                 {expired ? 'Expired' : daysRemaining(form.expiresAt) + ' left'}
//               </small>
//             </div>
//               <div className="w-full bg-gray-300 overflow-hidden">
//                 <div
//                   className="bg-green-600 text-xs font-medium
//                 text-blue-100 text-center p-0.5 leading-none
//                 rounded-l-full"
//                   style={{ width: `${(form.raised / form.estimatedAmount) * 100}%` }}
//                 >
//                 </div>
//             </div>
//             <div className="flex justify-between items-center 
//         font-bold mt-1 mb-2 text-gray-700"
//             >
//               <small>${form.raised || 0 } usd raised</small>
//               <small className="">$ <span>{form.estimatedAmount} usd</span></small>
//             </div>
//             </div>
//             {/* <div className="flex  space-x-4 py-3 px-3">
//               <div className="ml-2.5 inline-block px-6 py-2.5 bg-orange-600
//               text-white font-medium text-xs leading-tight uppercase
//               rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg
//               focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
//               active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">
//               <button className='' onClick={handleWhatsAppPay}>Share</button>
//               </div>
//               <a href="https://donate.stripe.com/test_aEU5mt5qi6So1Ko288">
//                 <button className='ml-10 inline-block px-6 py-2.5 bg-orange-600
//               text-white font-medium text-xs leading-tight uppercase
//               rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg
//               focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
//               active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out'>
//                 Donate
//                 </button>
//               </a>
//             </div> */}
//             <Link to={`/campaign/${id}`} className='text-red-400'>View Details</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProjectAccount;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { daysRemaining,  } from '../store'

const ProjectAccount = () => {
  const { id } = useParams();

  const [forms, setForms] = useState([]);
  const expired = new Date().getTime() > Number(forms?.expiresAt + '000')

  useEffect(() => {
    // Check if 'id' is available before making the request
    if (id) {
        axios.get(`http://localhost:3001/getForms/${id}`)
            .then(response => setForms([response.data]))
            .catch(err => console.log(err));
    } else {
        // If 'id' is not available, fetch all forms
        axios.get('http://localhost:3001/getForms')
            .then(response => setForms(response.data))
            .catch(err => console.log(err));
    }
}, [id]);



  // useEffect(() => {
  //   // Check if 'id' is available before making the request
  //   if (id) {
  //     axios.get(`http://localhost:3001/getForms/${id}`)
  //       .then(response => setForms([response.data]))
  //       .catch(err => console.log(err));
  //   }
  // }, [id]);
  

  const handleWhatsAppPay = () => {
    const stripeLink = "https://donate.stripe.com/test_aEU5mt5qi6So1Ko288";
    const message = `Hey there, I want to make a payment. Here's the link: ${stripeLink}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappLink);
  };

  return (
  <div>
    {/* <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full"
            >
        <span className="text-lg font-bold text-orange-900 leading-5">
          {forms.count || 0}
        </span>
        <span>Projects</span>
      </div>
    </div> */}
    <div className="my-5 grid grid-cols-4 gap-4 justify-center ">
      {forms.map(form => (
        <div key={form._id} className="bg-[#1c1c24] gap-3 rounded-xl sm:space-x-3 ">
          <img
            src={form.image}
            alt={form.image}  // Fix: Access form.image 
            className="rounded-xl h-64 w-full object-cover"
          />
          <div className='p-4'>
            <div className='flex flex-col text-left'>
              <h5 className='mt-2 text-2xl italic font-semibold text-white'>
              {form.username}
              </h5>
              <p className='mt-2 font-thin text-lg text-white'>{form.tittle}</p>
              <small className="text-[#b2b3bd] mt-1">
                {expired ? 'Expired' : daysRemaining(form.expiresAt) + ' left'}
              </small>
            </div>
              <div className="w-full bg-gray-300 overflow-hidden">
                <div
                  className="bg-green-600 text-xs font-medium
                text-blue-100 text-center p-0.5 leading-none
                rounded-l-full"
                  style={{ width: `${(form.raised / form.estimatedAmount) * 100}%` }}
                >
                </div>
            </div>
            <div className="flex justify-between items-center 
        font-bold mt-1 mb-2 text-[#b2b3bd]"
            >
              <small>${form.raised || 0 } usd raised</small>
              <small className="">$ <span>{form.estimatedAmount} usd</span></small>
            </div>
            </div>
            <div className="flex  space-x-4 py-3 px-3">
              <div className="ml-2.5 inline-block px-6 py-2.5 bg-orange-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg
              focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">
              <button className='' onClick={handleWhatsAppPay}>Share</button>
              </div>
              <a href="https://donate.stripe.com/test_aEU5mt5qi6So1Ko288">
                <button className='ml-10 inline-block px-6 py-2.5 bg-orange-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg
              focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out'>
                Donate
                </button>
              </a>
            </div>
            {/* <Link to={`/campaign/${form.id}`} className='text-red-400'>View Details</Link> */}
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProjectAccount;

