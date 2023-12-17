import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from 'react-toastify';



// Define a FormSubmit component that handles the form submission
const CreateProjectAccount = () => {

    const toTimestamp = (dateStr) => {
        const dateObj = Date.parse(dateStr)
        return dateObj / 1000
    }

    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [tittle, setTittle] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [addNumber, setAddNumber] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [nationality, setNationality] = useState("");
    const [cause, setCause] = useState("");
    const [isPublic, setIsPublic] = useState("");
    const [isPrivate, setIsPrivate] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [bankAccountHolder, setBankAccountHolder] = useState("");
    const [bankAccountNumber, setBankAccountNumber] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [branch, setBranch] = useState("");
    const [estimatedAmount, setEstimatedAmount] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");



    const handleFormSubmit = async (e) => {
        e.preventDefault();

            const formData = {
                username: username,
                tittle: tittle,
                email: email,
                phoneNumber: phoneNumber,
                addNumber: addNumber,
                address: address,
                state: state,
                nationality: nationality,
                cause: cause,
                whatsappNumber: whatsappNumber,
                bankAccountHolder: bankAccountHolder,
                bankAccountNumber: bankAccountNumber,
                expiresAt: toTimestamp(date),
                image: image,
                estimatedAmount: estimatedAmount,
            };

            const response = await fetch('http://localhost:3001/api/donateEase', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response)
            toast.success("Project created successfully");
            navigate("/hero");
    
            console.log(formData);
    
    };
    //         if (response) {
    //             const responseData = await response.json();
    //             if (responseData.success) {
    //                 toast.success("Project created successfully");
    //                 navigate("/projectAccount");
    //             }
    //         } else {
    //             console.log("Project creation failed");
    //         }
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //     }
    // };

    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen flex
    items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300"
        >
            <div
                className="gradient__bg shadow-xl shadow-black
        rounded-xl w-11/12 md:w-2/5 h-5/6 p-6  overflow-y-scroll"
            >
                <form onSubmit={handleFormSubmit} className="flex flex-col ">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold text-purple-800">Add Project</p>
                        <Link to={"/hero"}>
                            <button
                                type="button"
                                className="border-0 bg-transparent focus:outline-none"
                            >
                                <FaTimes className="textWord" />
                            </button>
                        </Link>
                    </div>

                    <div className="flex justify-center items-center mt-5">
                        <div className="rounded-xl overflow-hidden h-20 w-20">
                            <img
                                src={
                                    image ||
                                    "https://c8.alamy.com/comp/2RTP3EB/bestowal-set-creative-icons-kindness-organ-donation-social-responsibility-world-embracing-hope-disabled-aid-sponsorship-charitable-foundation-2RTP3EB.jpg"
                                }
                                alt="project title"
                                className="h-full w-full object-cover cursor-pointer"
                            />
                        </div>
                    </div>

                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <input
                            className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            type="text"
                            name="title"
                            placeholder="Title"
                            required
                            value={tittle || ''}
                            onChange={(e) => setTittle(e.target.value)}
                        />
                    </div>
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <input
                            className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            type="text"
                            name="title"
                            placeholder="Your full name"
                            required
                            value={username || ''}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <input
                            className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            type="text"
                            min="10,000"
                            name="estimatedAmount"
                            placeholder="Estimated amount"
                            required
                            value={estimatedAmount || ''}
                            onChange={(e) => setEstimatedAmount(e.target.value)}
                        />
                    </div>
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <input
                            className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            type="tel"
                            name="phoneNumber"
                            placeholder="Your phone number"
                            required
                            value={phoneNumber || ''}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <input
                            className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={email || ''}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <input
                            className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            type="text"
                            name="addNumber"
                            placeholder="Your BVN"
                            required
                            value={addNumber || ''}
                            onChange={(e) => setAddNumber(e.target.value)}
                        />
                    </div>
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <input
                            className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            type="text"
                            name="address"
                            required
                            placeholder="Your full address"
                            value={address || ''}
                            onChange={(e) => setAddress(e.target.value)}
                            rows={2}
                        />
                    </div>
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <input
                            className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            type="text"
                            name="state"
                            required
                            placeholder="Enter state"
                            value={state || ''}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <input
                            className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            required
                            type="text"
                            name="nationality"
                            placeholder="Enter nationality"
                            value={nationality || ''}
                            onChange={(e) => setNationality(e.target.value)}
                        />
                    </div>
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <textarea
                            className="py-2 block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            required
                            type="text"
                            name="cause"
                            placeholder="Start typing..."
                            value={cause || ''}
                            onChange={(e) => setCause(e.target.value)}
                            rows={6}
                        />
                    </div>
                    <div className="text-white">
                        <label>
                            <h2>Select Option</h2>
                        </label>
                        <div className="option-select"></div>
                        <label className="">
                            <p>Get payment via Bestowal platform</p>
                            <input
                                type="checkbox"
                                name="isPublic"
                                checked={isPublic || ''}
                                onChange={(e) => setIsPublic(e.target.checked)}
                            />

                        </label>
                        <label className="">
                            <p>Get payment privately (Donor contacts via WhatsApp)</p>
                            <input
                                type="checkbox"
                                name="isPrivate"
                                checked={isPrivate || ''}
                                onChange={(e) => setIsPrivate(e.target.checked)}
                            />

                        </label>
                    </div>

                    {isPrivate && (
                        <div>
                            <div
                                className="flex justify-between items-center
    bg-gray-300 rounded-xl mt-5"
                            >
                                <input
                                    className="block w-full bg-transparent
    border-0 text-sm text-slate-500 focus:outline-none
    focus:ring-0"
                                    type="text"
                                    name="whatsappNumber"
                                    placeholder="Enter WhatsApp number"
                                    value={whatsappNumber || ''}
                                    onChange={(e) => setWhatsappNumber(e.target.value)}
                                    style={{ marginBottom: "10px" }}
                                    required
                                />
                            </div>
                            <div
                                className="text-white"
                            >
                                <label className="flex gap-2">
                                    <p >Same as Phone number</p>
                                    <input className="mt-1"
                                        type="checkbox"
                                    />
                                </label>
                            </div>
                        </div>
                    )}

                    {isPublic && (
                        <div>
                            <div
                                className="flex justify-between items-center
    bg-gray-300 rounded-xl mt-5"
                            >

                                <input className="block w-full bg-transparent
    border-0 text-sm text-slate-500 focus:outline-none
    focus:ring-0"
                                    type="text"
                                    name="bankAccountHolder"
                                    placeholder="Name of Account Holder"
                                    value={bankAccountHolder || ''}
                                    onChange={(e) => setBankAccountHolder(e.target.value)}
                                />
                            </div>
                            <div
                                className="flex justify-between items-center
    bg-gray-300 rounded-xl mt-5"
                            >
                                <input
                                    className="py-2 block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                                    type="text"
                                    name="bankAccountNumber"
                                    placeholder="Account Number"
                                    value={bankAccountNumber || ''}
                                    onChange={(e) => setBankAccountNumber(e.target.value)}
                                />
                            </div>
                            <div
                                className="flex justify-between items-center
    bg-gray-300 rounded-xl mt-5"
                            >
                                <input
                                    className="py-2 block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                                    type="text"
                                    name="ifscCode"
                                    placeholder="Bank Name"
                                    value={ifscCode || ''}
                                    onChange={(e) => setIfscCode(e.target.value)}
                                />
                            </div>
                            <div
                                className="flex justify-between items-center
    bg-gray-300 rounded-xl mt-5"
                            >
                                <input
                                    className="py-2 block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                                    type="text"
                                    name="branch"
                                    placeholder="Branch"
                                    value={branch || ''}
                                    onChange={(e) => setBranch(e.target.value)}
                                />
                            </div>
                        </div>
                    )}
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <input
                            className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            type="date"
                            name="date"
                            placeholder="Expires"
                            required
                            value={date || ''}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <input
                            className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            type="url"
                            name="image"
                            placeholder="Image Url"
                            value={image || ''}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-1/5 mx-auto inline-block px-auto py-2.5 bg-orange-600
text-white font-medium text-md leading-tight rounded-full shadow-md hover:bg-gray-700 mt-5"
                    >
                        Submit Project
                    </button>
                </form>
            </div>
        </div>
    );
};



export default CreateProjectAccount;


