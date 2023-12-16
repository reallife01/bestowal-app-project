// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FormCounter = () => {
//   const [forms, setForms] = useState(0);

//   useEffect(() => {
//     const fetchForms = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/getForms');
//         // Corrected line
//         setForms(response.data);
//       } catch (error) {
//         console.error('Error fetching project count:', error);
//       }
//     };

//     fetchForms();
//   }, []);


//     return (
// <div>

//     <div className="flex justify-center items-center mt-10">
//             <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full"
//             >
//                 <span
//                 className="text-lg font-bold text-orange-900
//                 leading-5"
//                 >
//                 {forms.count || 1}
//                 </span>
//                 <span>Projects</span>
//             </div>
//             {/* <div
//                 className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full"
//             >
//                 <span
//                 className="text-lg font-bold text-orange-900
//                 leading-5"
//                 >
//                 0
//                 </span>
//                 <span>Backings</span>
//             </div>
//             <div
//                 className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full"
//             >
//                 <span
//                 className="text-lg font-bold text-orange-900
//                 leading-5"
//                 >
//                 0
//                 </span>
//                 <span>Donated</span>
//             </div> */}
//             </div>
//         </div>

// )
// }

// export default FormCounter



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormCounter = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getForms');
        setForms(response.data);
      } catch (error) {
        console.error('Error fetching forms:', error);
      }
    };

    fetchForms();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
          <span className="text-lg font-bold text-orange-900 leading-5">
            {forms.length || 0}
          </span>
          <span>All Campaigns</span>
        </div>
      </div>
    </div>
  );
};

export default FormCounter;
