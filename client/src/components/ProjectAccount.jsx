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
import { Link } from "react-router-dom";

const ProjectCardAccount = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getForms')
      .then(response => setForms(response.data))
      .catch(err => console.log(err));
  }, []);
  

  const handleWhatsAppPay = () => {
    const stripeLink = "https://buy.stripe.com/test_14k8zE9C60G9al24gg";
    const message = `Hey, I want to make a payment. Here's the link: ${stripeLink}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappLink);
  };

  return (
    <div className="my-5 grid grid-cols-4 gap-4 justify-center">
      {forms.map(form => (
        <div key={form._id} className="bg-gray-700 gap-3 flex basis-1/2 justify-start border-2 items-start sm:space-x-3 flex-wrap">
          <img
            src={form.image}
            alt={form.image}  // Fix: Access form.image instead of projectData.image
            className="rounded-xl h-64 w-full object-cover"
          />
          <h5>{form.username}</h5>
          <h5>{form.state}</h5>
          <h5>{form.estimatedAmount}</h5>
          <div className="flex justify-between py-3 px-3">
            <button onClick={handleWhatsAppPay}>Share</button>
            <Link to={"/checkout"}><button>
              Donate
            </button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCardAccount;
