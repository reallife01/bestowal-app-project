import React from "react";
import details from "./details";

const ProjectCardAccount = () => {
  const handleWhatsAppPay = () => {
    const stripeLink = "https://buy.stripe.com/test_14k8zE9C60G9al24gg";
    const message = `Hey, I want to make a payment. Here's the link: ${stripeLink}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappLink);
  };

  return (
      <div className="mb-5 grid grid-cols-4 gap-4 justify-center">
        {details.map((item) => (
          <div className=" bg-gray-700 gap-3 flex  basis-1/2 justify-start border-4 items-start
        sm:space-x-3 flex-wrap" key={item.key}>
            <img
              src={item.src}
              alt={item.alt}
              className="rounded-xl h-64 w-full object-cover"
            />
            <h5>{item.heading}</h5>
            <h5>{item.personName}</h5>
            <h5>{item.fundDetails}</h5>
            <div className="flex justify-between py-3 px-3">
              <button onClick={handleWhatsAppPay}>Share</button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://buy.stripe.com/test_14k8zE9C60G9al24gg")
                }
              >
                Donate
              </button>
            </div>
          </div>
        ))}
      </div>
  );
};

export default ProjectCardAccount;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const ProjectCardAccount = () => {
//   const [projectData, setProjectData] = useState(null);

//   const fetchProjectData = async () => {
//     try {
//       const response = await axios.get('/api/projectAccount'); // Correct endpoint
//       setProjectData(response.data);
//     } catch (error) {
//       console.error('Error fetching project data:', error);
//       // Handle errors as needed
//     }
//   };
//   fetchProjectData()
  

//   const handleWhatsAppPay = () => {
//     const stripeLink = "https://buy.stripe.com/test_14k8zE9C60G9al24gg";
//     const message = `Hey, I want to make a payment. Here's the link: ${stripeLink}`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
//     window.open(whatsappLink);
//   };

//   return (
//       <div className="mb-5 grid grid-cols-4 gap-4 justify-center">
//         {projectData ? (
//           <div className=" bg-gray-700 gap-3 flex  basis-1/2 justify-start border-4 items-start
//         sm:space-x-3 flex-wrap">
//             <img
//               src={projectData.image}
//               alt={projectData.image}
//               className="rounded-xl h-64 w-full object-cover"
//             />
//             <h5>{projectData.username}</h5>
//             <h5>{projectData.state}</h5>
//             <h5>{projectData.estimatedAmount}</h5>
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
//           ):(
//           <div>
//             <p>Loading ....</p>
//           </div>
//           )}
//       </div>
//   );
// };

// export default ProjectCardAccount;



