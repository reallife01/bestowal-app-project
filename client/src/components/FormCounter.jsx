import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormCounter = () => {
//   const [projectCount, setProjectCount] = useState(0);
  const [forms, setForms] = useState(0);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getForms');
        setForms(response.data.count);
      } catch (error) {
        console.error('Error fetching project count:', error);
      }
    };

    fetchForms();
  }, []);

    return (
<div>

    <div className="flex justify-center items-center mt-10">
            <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full"
            >
                <span
                className="text-lg font-bold text-orange-900
                leading-5"
                >
                {forms || 0}
                </span>
                <span>Projects</span>
            </div>
            {/* <div
                className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full"
            >
                <span
                className="text-lg font-bold text-orange-900
                leading-5"
                >
                0
                </span>
                <span>Backings</span>
            </div>
            <div
                className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full"
            >
                <span
                className="text-lg font-bold text-orange-900
                leading-5"
                >
                0
                </span>
                <span>Donated</span>
            </div> */}
            </div>
        </div>

)
}

export default FormCounter