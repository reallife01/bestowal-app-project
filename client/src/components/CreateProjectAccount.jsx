// import { useState } from 'react'
// import { FaTimes } from 'react-icons/fa'
// import { toast } from 'react-toastify'

// const CreateProject = () => {
//   const [title, setTitle] = useState('')
//   const [description, setDescription] = useState('')
//   const [cost, setCost] = useState('')
//   const [accountNumber, setAccountNumber] = useState('')
//   const [bankName, setBankName] = useState('')
//   const [name, setName] = useState('')
//   const [date, setDate] = useState('')
//   const [imageURL, setImageURL] = useState('')

//   const toTimestamp = (dateStr) => {
//     const dateObj = Date.parse(dateStr)
//     return dateObj / 1000
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!title || !description || !cost || !accountNumber || !bankName || !name || !date || !imageURL) return

//     const params = {
//       title,
//       description,
//       cost,
//       accountNumber,
//       bankName,
//       name,
//       expiresAt: toTimestamp(date),
//       imageURL,
//     }

//     await createProject(params)
//     toast.success('Project created successfully, will reflect in 30sec.')
//     onClose()
//   }

//   const onClose = () => {
//     reset()
//   }

//   const reset = () => {
//     setTitle('')
//     setCost('')
//     setAccountNumber('')
//     setBankName('')
//     setName('')
//     setDescription('')
//     setImageURL('')
//     setDate('')
//   }

//   return (
//     <div
//       className={"fixed top-0 left-0 w-screen h-screen flex
//     items-center justify-center bg-black bg-opacity-50
//     transform transition-transform duration-300" }
//     >
//       <div
//         className="gradient__bg shadow-xl shadow-black
//         rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"
//       >
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           <div className="flex justify-between items-center">
//             <p className="font-semibold text-purple-800">Add Project</p>
//             <button
//               onClick={onClose}
//               type="button"
//               className="border-0 bg-transparent focus:outline-none"
//             >
//               <FaTimes className='textWord'/>
//             </button>
//           </div>

//           <div className="flex justify-center items-center mt-5">
//             <div className="rounded-xl overflow-hidden h-20 w-20">
//               <img
//                 src={
//                   imageURL ||
//                   'https://media.wired.com/photos/5926e64caf95806129f50fde/master/pass/AnkiHP.jpg'
//                 }
//                 alt="project title"
//                 className="h-full w-full object-cover cursor-pointer"
//               />
//             </div>
//           </div>

//           <div
//             className="flex justify-between items-center
//           bg-gray-300 rounded-xl mt-5"
//           >
//             <input
//               className="block w-full bg-transparent
//             border-0 text-sm text-slate-500 focus:outline-none
//             focus:ring-0"
//               type="text"
//               name="title"
//               placeholder="Title"
//               onChange={(e) => setTitle(e.target.value)}
//               value={title}
//               required
//             />
//           </div>

//           <div
//             className="flex justify-between items-center
//           bg-gray-300 rounded-xl mt-5"
//           >
//             <input
//               className="block w-full bg-transparent
//             border-0 text-sm text-slate-500 focus:outline-none
//             focus:ring-0"
//               type="number"
//               min={10,000}
//               name="cost"
//               placeholder="cost"
//               onChange={(e) => setCost(e.target.value)}
//               value={cost}
//               required
//             />
//           </div>
//           <div
//             className="flex justify-between items-center
//           bg-gray-300 rounded-xl mt-5"
//           >
//             <input
//               className="block w-full bg-transparent
//             border-0 text-sm text-slate-500 focus:outline-none
//             focus:ring-0"
//               type="number"
//               name="account number"
//               placeholder="account number"
//               onChange={(e) => setCost(e.target.value)}
//               value={accountNumber}
//               required
//             />
//           </div>
//           <div
//             className="flex justify-between items-center
//           bg-gray-300 rounded-xl mt-5"
//           >
//             <input
//               className="block w-full bg-transparent
//             border-0 text-sm text-slate-500 focus:outline-none
//             focus:ring-0"
//               type="name"
//               name="bank name"
//               placeholder="bank name"
//               onChange={(e) => setCost(e.target.value)}
//               value={bankName}
//               required
//             />
//           </div>
//           <div
//             className="flex justify-between items-center
//           bg-gray-300 rounded-xl mt-5"
//           >
//             <input
//               className="block w-full bg-transparent
//             border-0 text-sm text-slate-500 focus:outline-none
//             focus:ring-0"
//               type="name"
//               name="name"
//               placeholder="name"
//               onChange={(e) => setCost(e.target.value)}
//               value={name}
//               required
//             />
//           </div>

//           <div
//             className="flex justify-between items-center
//           bg-gray-300 rounded-xl mt-5"
//           >
//             <input
//               className="block w-full bg-transparent
//             border-0 text-sm text-slate-500 focus:outline-none
//             focus:ring-0"
//               type="date"
//               name="date"
//               placeholder="Expires"
//               onChange={(e) => setDate(e.target.value)}
//               value={date}
//               required
//             />
//           </div>

//           <div
//             className="flex justify-between items-center
//           bg-gray-300 rounded-xl mt-5"
//           >
//             <input
//               className="block w-full bg-transparent
//             border-0 text-sm text-slate-500 focus:outline-none
//             focus:ring-0"
//               type="url"
//               name="imageURL"
//               placeholder="Image URL"
//               onChange={(e) => setImageURL(e.target.value)}
//               value={imageURL}
//               required
//             />
//           </div>

//           <div
//             className="flex justify-between items-center
//           bg-gray-300 rounded-xl mt-5"
//           >
//             <textarea
//               className="block w-full bg-transparent
//             border-0 text-sm text-slate-500 focus:outline-none
//             focus:ring-0"
//               type="text"
//               name="description"
//               placeholder="Description"
//               onChange={(e) => setDescription(e.target.value)}
//               value={description}
//               required
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="inline-block px-6 py-2.5 bg-orange-600
//             text-white font-medium text-md leading-tight
//             rounded-full shadow-md hover:bg-gray-700 mt-5"
//           >
//             Submit Project
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }
// export default CreateProject