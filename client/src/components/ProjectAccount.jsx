import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { daysRemaining } from '../store';

const ProjectAccount = () => {
  const { formId } = useParams();
  const [forms, setForms] = useState([]);
  const expired = new Date().getTime() > Number(forms?.expiresAt + '000')
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        if (formId) {
          response = await axios.get(`http://localhost:3001/getForms/${formId}`);
          setForms([response.data]);
        } else {
          response = await axios.get('http://localhost:3001/getForms');
          setForms(response.data);
        }

        setIsLoading(false); // Set loading to false after successful data fetch
      } catch (error) {
        console.error('Error fetching form data:', error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, [formId]);


  if (isLoading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or component
  }

  return (
    <div>
      <div className="my-5 grid grid-cols-4 gap-4 justify-center ">
      {forms.map(form => (
        <div key={form._id} className="bg-[#1c1c24] gap-3 rounded-xl sm:space-x-3 ">
          <img
            src={form.image}
            alt={form.image} 
            className="w-full h-[158px] object-cover rounded-[15px]"
          />
          <div className='p-4'>
            <div className="block">
            <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">{form.tittle}</h3>
            <h5 className="font-epilogue font-semibold text-[14px] text-white text-left leading-[24px] truncate">{form.email}</h5>
            <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">{form.cause}</p>
          </div>
            <div className='flex flex-col text-left'>
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
              <small>$ {form.raised || 0 } usd raised</small>
              <small className="">$ <span>{form.estimatedAmount} usd</span></small>
            </div>
            </div>
            <div className='mb-2'>
              <Link to={`/campaign/${form._id}`} className='text-red-400'>View Details</Link>
            </div>        
      </div>
      ))}
    </div>
  </div>
  );
};

export default ProjectAccount;

