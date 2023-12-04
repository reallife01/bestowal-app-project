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
import Dashboard from './views/Dashboard';
import Project from './views/Project';
import { isWallectConnected } from './services/blockchain';
import { ToastContainer } from 'react-toastify';
import PreLoader from "./components/Preloader";
import CreateProjectAccount from './components/CreateProjectAccount';
import ProjectAccount from "./components/ProjectAccount";







const App = () => {

  // Check If User is Logged In
  const [loaded, setLoaded] = useState(false)
  

  useEffect(async () => {
    await isWallectConnected()
    console.log('Blockchain loaded')
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
        <Route path="/dashboard" element={<Dashboard />} className="min-h-screen relative"/>
        <Route path="/projects/:id" element={<Project />} className="min-h-screen relative" />
        <Route path="/createProjectAccount" element={<CreateProjectAccount />} className="min-h-screen relative"/>
        <Route path="/projectAccount" element={<ProjectAccount />} className="min-h-screen relative"/>
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