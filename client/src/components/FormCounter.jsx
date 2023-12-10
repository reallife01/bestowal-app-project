import React, { useEffect, useState } from "react";
import { fetchFormCount } from "./fetchFormCount";
const FormCounter = () => {

    const [formCount, setFormCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const count = await fetchFormCount();
      setFormCount(count);
    };

    fetchData();
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
                {formCount || 0}
                </span>
                <span>Projects</span>
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
            </div>
            </div>
        </div>

)
}

export default FormCounter