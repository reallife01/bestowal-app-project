import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from 'react-toastify'

// Define a FormSubmit component that handles the form submission
const CreateProjectAccount = () => {
    const navigate = useNavigate();

    const toTimestamp = (dateStr) => {
        const dateObj = Date.parse(dateStr);
        return dateObj / 1000;
    };

    const [projectNew, setProjectNew] = useState({
        title: "",
        description: "",
        cost: "",
        accountNumber: "",
        bankName: "",
        accountName: "",
        date: "",
        imageURL: "",
    });

    // Handle Inputs
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setProjectNew({ ...projectNew, [name]:value});
    };

    // Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Object DeStructuring
        // Store Object Data into Variables
        const {
            title,
            cost,
            accountNumber,
            bankName,
            accountName,
            date,
            imageURL,
            description,
        } = projectNew;
        try {
            //It is Submitted on port 3000 by default
            // Which is Front End but we need to
            // Submit it on Backend which is on
            // Port 3001. So we need Proxy.
            const res = await fetch("/createProjectAccount", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    cost,
                    accountNumber,
                    bankName,
                    accountName,
                    date,
                    imageURL,
                    description,
                }),
            });
            console.log(res.status);
            if (res.status === 400 || !res) {
                window.alert("An error occurred");
            } else {
                // You need to Restart the Server for Proxy Works
                // Now Try Again
                const expired = {expiresAt: toTimestamp(date)}
                console.log(expired)
                toast.success('Project created successfully')
                navigate("/projectAccount");
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div
            className="mt-24 top-0 left-0 w-screen h-screen flex
items-center justify-center bg-black bg-opacity-50
transform transition-transform duration-300"
        >
            <div
                className="gradient__bg shadow-xl shadow-black
rounded-xl w-full  h-7/12 p-6"
            >
                <form onSubmit={handleSubmit} method="POST" className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold text-purple-800">Add Project</p>
                        <Link to={"/dashboard"}>
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
                                    projectNew.imageURL ||
                                    "https://media.wired.com/photos/5926e64caf95806129f50fde/master/pass/AnkiHP.jpg"
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
                            value={projectNew.title}
                            onChange={handleInput}
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
                            type="number"
                            min="10,000"
                            name="cost"
                            placeholder="cost"
                            required
                            value={projectNew.cost}
                            onChange={handleInput}
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
                            type="number"
                            name="accountNumber"
                            placeholder="account number"
                            required
                            value={projectNew.accountNumber}
                            onChange={handleInput}
                        />
                    </div>
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <input
                            className="py-2 ml-2.5 block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            type="text"
                            name="bankName"
                            placeholder="bank name"
                            required
                            value={projectNew.bankName}
                            onChange={handleInput}
                        />
                    </div>
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <input
                            className="py-2 ml-2.5 block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            type="text"
                            name="accountName"
                            placeholder="account name"
                            required
                            value={projectNew.accountName}
                            onChange={handleInput}
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
                            type="date"
                            name="date"
                            placeholder="Expires"
                            required
                            value={projectNew.date}
                            onChange={handleInput}
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
                            name="imageURL"
                            placeholder="Image URL"
                            required
                            value={projectNew.imageURL}
                            onChange={handleInput}
                        />
                    </div>
                    <div
                        className="flex justify-between items-center
bg-gray-300 rounded-xl mt-5"
                    >
                        <textarea
                            className="block w-full bg-transparent
border-0 text-sm text-slate-500 focus:outline-none
focus:ring-0"
                            type="text"
                            name="description"
                            placeholder="Description"
                            required
                            value={projectNew.description}
                            onChange={handleInput}
                        ></textarea>
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
