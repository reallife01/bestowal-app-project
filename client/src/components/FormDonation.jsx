import React, { useState } from "react";
import axios from "axios";

const FormDonation = ({ formId }) => {
    const [campaignName, setCampaignName] = useState("");
    const [donatorName, setDonatorName] = useState("");
    const [donationAmount, setDonationAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(null);

            // Send the donation data to the backend
            const response = await axios.post(
                `http://localhost:3001/donate/${formId}`,
                {
                    campaignName,
                    donatorName,
                    donationAmount,
                }
            );

            console.log(response.data); // Log the response from the server

            // Navigate to the Stripe link
            const stripeLink = "https://donate.stripe.com/test_aEU5mt5qi6So1Ko288";
            window.location.href = stripeLink;
        } catch (error) {
            console.error("Error donating:", error);
            setError("Failed to donate. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleWhatsAppPay = () => {
        const stripeLink = "https://donate.stripe.com/test_aEU5mt5qi6So1Ko288";
        const message = `Hey there, I want to make a payment. Here's the link: ${stripeLink}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
        window.open(whatsappLink);
    };

    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit}>
                                <div
                    className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                >
                    <input
                        className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                        type="text"
                        placeholder="Campaign full name"
                        required
                        value={campaignName}
                        onChange={(e) => setCampaignName(e.target.value)}
                    />
                </div>
                <br />
                <div
                    className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                >
                    <input
                        className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                        type="text"
                        placeholder="Donator full name"
                        required
                        value={donatorName}
                        onChange={(e) => setDonatorName(e.target.value)}
                    />
                </div>
                <br />
                <div
                    className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                >
                    <input
                        className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                        placeholder="Your Donation Amount"
                        type="number"
                        required
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                    />
                </div>
                <br />
                <div className="p-4 ml-10 space-x-4 py-3 px-3">
                    <div className="ml-2.5 inline-block px-6 py-2.5 bg-orange-600
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg
                        focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">
                        <button onClick={handleWhatsAppPay} disabled={loading}>
                            Share
                        </button>
                    </div>
                    <button
                        className="ml-10 inline-block px-6 py-2.5 bg-orange-600
                            text-white font-medium text-xs leading-tight uppercase
                            rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg
                            focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Donating..." : "Donate"}
                    </button>
                </div>
            </form>
            {error && (
                <div className="text-red-500 mt-2 ml-10">
                    {error}
                </div>
            )}
        </div>
    );
};

export default FormDonation;
