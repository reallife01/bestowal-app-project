import React, { useEffect, useState } from "react";
import { preLoaderAnim } from "../animations";
import './preloader.css'
import PulseLoader from "react-spinners/PulseLoader";


const PreLoader = () => {
    let [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3000)
        
    }, [])


  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
      <PulseLoader
        color={'#FF8A71'}
        loading={loading}
        size={40}
      />
      </div>
    </div>
  );
};

export default PreLoader;