// import React, { useState, useEffect } from "react";
// import ProjectCardAccount from "./ProjectCardAccount";
// import "./main.css";

// const ProjectAccount = ({ projectNew }) => {
//     // Define an initial state object with empty values for the total projects, total backing, and total donations
//     const initialState = {
//         totalProjects: undefined,
//         totalBacking: undefined,
//         totalDonations: undefined,
//       };

//     // Use the useState hook to create a state variable and a setter function for the data
//     const [data, setData] = useState(initialState);

//     // Define a function that gets the total projects, total backing, and total donations from the API
//     const getDashboardData = async ({}) => {
//         try {
//           const response = await fetch("/get-dashboard-data");
//           const data = await response.json();
    
//           setData({
//             totalProjects: data.totalProjects,
//             totalBacking: data.totalBacking,
//             totalDonations: data.totalDonations,
//           });
//         } catch (error) {
//           // Handle the API error
//           console.error("Failed to get dashboard data:", error);
//         }
//       };

//     // Get the dashboard data when the component mounts
//     useEffect(() => {
//         getDashboardData();
//     }, []);

import React, { useState, useEffect } from "react";
import ProjectCardAccount from "./ProjectCardAccount";
import "./main.css";

const ProjectAccount = ({ projectNew }) => {
  // Define an initial state object with empty values for the total projects, total backing, and total donations
  const initialState = {
    totalProjects: undefined,
    totalBacking: undefined,
    totalDonations: undefined,
  };

  // Use the useState hook to create a state variable and a setter function for the data
  const [data, setData] = useState(initialState);

  // Define a function that gets the total projects, total backing, and total donations from the API
  const getDashboardData = async () => {
    try {
      const response = await fetch("/get-dashboard-data");
      const data = await response.json();

      setData(data); // Set the entire data object from the API response
    } catch (error) {
      // Handle the API error
      console.error("Failed to get dashboard data:", error);
    }
  };

    // Get the dashboard data when the component mounts
  useEffect(() => {
    getDashboardData();
  }, []);

    return (
        <div>
            <div className=" text-purple-600 flex justify-center items-center my-10">
                <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
                    <span
                        className="text-lg font-bold text-orange-900
leading-5"
                    >
                        {data?.totalProjects || 0}
                    </span>
                    <span>Projects</span>
                </div>
                <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
                    <span
                        className="text-lg font-bold text-orange-900
leading-5"
                    >
                        {data?.totalBacking || 0}
                    </span>
                    <span>Backings</span>
                </div>
                <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
                    <span
                        className="text-lg font-bold text-orange-900
leading-5"
                    >
                        {data?.totalDonations || 0}
                    </span>
                    <span>Donated</span>
                </div>
            </div>
            <ProjectCardAccount {...projectNew}/>
        </div>
    );
};

export default ProjectAccount;





// import React, { useState, useEffect } from "react";
// import ProjectCardAccount from "./ProjectCardAccount";
// import "./main.css";

// const ProjectAccount = ({ projectNew }) => {
//   // Define an initial state object with empty values for the total projects, total backing, and total donations
//   const initialState = {
//     totalProjects: undefined,
//     totalBacking: undefined,
//     totalDonations: undefined,
//   };

//   // Use the useState hook to create a state variable and a setter function for the data
//   const [data, setData] = useState(initialState);

//   // Define a function that gets the total projects, total backing, and total donations from the API
//   const getDashboardData = async () => {
//     try {
//       const response = await fetch("/get-dashboard-data");
//       const data = await response.json();

//       setData(data); // Set the entire data object from the API response
//     } catch (error) {
//       // Handle the API error
//       console.error("Failed to get dashboard data:", error);
//     }
//   };

//   // Get the dashboard data when the component mounts
//   useEffect(() => {
//     getDashboardData();
//   }, []);

//   return (
//     <div>
//       <div className=" text-purple-600 flex justify-center items-center my-10">
//         {data.totalProjects !== undefined && (
//           <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
//             <span className="text-lg font-bold text-orange-900 leading-5">
//               {data.totalProjects || 0}
//             </span>
//             <span>Projects</span>
//           </div>
//         )}
//         {data.totalBacking !== undefined && (
//           <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
//             <span className="text-lg font-bold text-orange-900 leading-5">
//               {data.totalBacking || 0}
//             </span>
//             <span>Backings</span>
//           </div>
//         )}
//         {data.totalDonations !== undefined && (
//           <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
//             <span className="text-lg font-bold text-orange-900 leading-5">
//               {data.totalDonations || 0}
//             </span>
//             <span>Donated</span>
//           </div>
//         )}
//       </div>
//       <ProjectCardAccount {...projectNew} />
//     </div>
//   );
// };

// export default ProjectAccount;

