import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Loader } from '../components';

// Error component for handling API errors
const ErrorComponent = () => (
    <div className="error-message">
        <p>Oops! Something went wrong. Please try again later.</p>
    </div>
);

const CampaignDetailsAccount = () => {
    const { formId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [forms, setForms] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Form ID:', formId);
                // Make sure formId is defined before making the request
                if (!formId) {
                    throw new Error('Form ID is undefined');
                }

                // Replace :formId with the actual value of formId
                const response = await axios.get(`http://localhost:3001/getForms/${formId}`);
                setForms(response.data);
            } catch (error) {
                console.error('Error fetching form data:', error);
                setError(error.response?.data || 'An unexpected error occurred.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [formId]);

    const handleWhatsAppPay = () => {
        const stripeLink = "https://donate.stripe.com/test_aEU5mt5qi6So1Ko288";
        const message = `Hey there, I want to make a payment. Here's the link: ${stripeLink}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
        window.open(whatsappLink);
    };


    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorComponent />;
    }

    return (
        <div className="mx-10">
            {isLoading && <Loader />}

            <div className="w-full flex md:flex-row flex-col mt-10  gap-[30px]" key={forms._id}>
                <div className=" flex-1 flex-col">
                    <img src={forms.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl" />
                    <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
                        {/* <div className="absolute h-full bg-[#4acd8d]" style={{ width: `${calculateBarPercentage(form.target, form.amountCollected)}%`, maxWidth: '100%'}}>
            </div> */}
                    </div>
                </div>

                <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
                    {/* <CountBox title="Days Left" value={remainingDays} /> */}
                    {/* <CountBox title={`Raised of ${forms.target}`} value={forms.amountCollected} /> */}
                    {/* <CountBox title="Total Backers" value={donators.length} /> */}
                </div>
            </div>

            <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
                <div className="flex-[2] flex flex-col gap-[40px]">
                    <div>
                        <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Creator</h4>

                        <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
                            {/* <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                                <img src={assets.thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
                            </div> */}
                            <div>
                                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]"></p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Story</h4>

                        <div className="mt-[20px]">
                            <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">{forms.description}</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Email</h4>

                        <div className="mt-[20px]">
                            <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">{forms.email}</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 mb-3">
                    <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Fund</h4>

                    <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
                        <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
                            Fund the campaign
                        </p>
                        <div className="flex p-4 ml-10 space-x-4 py-3 px-3">
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
                        <div className="mt-[30px]">
                            <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">Back it because you believe in it.</h4>
                                <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">Support the project for no reward, just because it speaks to you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampaignDetailsAccount

