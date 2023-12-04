import React from "react";
import "./styles.css";
import "./responsive.css";
import { Link } from 'react-router-dom';

function StartProject(){

  
  
  return (
    <div className="">
      <div className="flex mt-6 justify-center">
          <Link to={'/createProjectAccount'}>
            <button className="inline-block px-7 py-3 mr-2 bg-orange-800
          text-white font-medium text-xs leading-snug uppercase shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 rounded-full active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
          >Get Funds</button>
          </Link>
          <Link to={'/ProjectAccount'}>
              <button className="inline-block px-7 py-3 mr-2 bg-orange-800
            text-white font-medium text-xs leading-snug uppercase shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 rounded-full active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
            >Get Funds</button>
          </Link>
      </div>
        </div>
  );
};

export default StartProject;
