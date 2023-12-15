// import React from 'react';
// import { Route, Routes } from 'react-router-dom';

// // import { Sidebar, Navbar } from './components';
// import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

// const App = () => {
//   return (
//     <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
//       <div className="sm:flex hidden mr-10 relative">
//         {/* <Sidebar /> */}
//       </div>

//       <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
//         {/* <Navbar /> */}

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/create-campaign" element={<CreateCampaign />} />
//           <Route path="/campaign-details/:id" element={<CampaignDetails />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App


import NavbarMainHome from "./components/navbar/NavbarMainHome";
import HeaderSection from "./containers/header/HeaderSection";
import About from "./containers/about/About";
import Features from "./containers/features/Features";
import Possibility from "./containers/possibility/Possibility";
import Blog from "./containers/blog/Blog";
import Footer from "./containers/footer/Footer";
import Contact from "./containers/contact/Contact";
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
// import Dashboard from './views/Dashboard';
import { CampaignDetails, CreateCampaign, Profile } from './pages';
// import { isWallectConnected } from './services/blockchain';
import { ToastContainer } from 'react-toastify';
import PreLoader from "./components/Preloader";
import CreateProjectAccount from './components/CreateProjectAccount';
import ProjectAccount from "./components/ProjectAccount";

import Hero from "./components/Hero";
// import Cancel from "./components/Cancel";
// import Payment from "./components/Payment";







const App = () => {

  // Check If User is Logged In
  const [loaded, setLoaded] = useState(false)
  

  useEffect(async () => {
    setLoaded(true)
  }, [])

  return (
  <>
  <PreLoader/>
    <div className="App">
      <div className="gradient__bg">
        <NavbarMainHome />
      </div>
      {loaded ? (
      <Routes>
        <Route path="/" element={<HeaderSection  />}
        className="gradient__bg" />
        <Route path="/about" element={<About  />} />
        <Route path="/features" element={<Features/>} />
        <Route path="/possibility" element={<Possibility/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/hero" element={<Hero />} className="min-h-screen relative"/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        <Route path="/createProjectAccount" element={<CreateProjectAccount />} className="min-h-screen relative"/>
        <Route path="/projectAccount" element={<ProjectAccount />} className="min-h-screen relative"/>
        {/* <Route path="/payment" element={<Payment />} className="min-h-screen relative"/>
        <Route path="/success" element={<Success />} className="min-h-screen relative"/>
        <Route path="/cancel" element={<Cancel />} className="min-h-screen relative"/> */}
      </Routes>
      ) : null}
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
      <Footer />
    </div>
  </>
  )
}

export default App
