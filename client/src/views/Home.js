import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook

import StartProject from '../components/StartProject';
import CreateProjectAccount from '../components/CreateProjectAccount';
import ProjectAccount from '../components/ProjectAccount';

function Home() {
  const [isdonate, setdonate] = useState(false);
  const [isgetFunds,setgetFunds]=useState(false);
  const navigate = useNavigate(); // Access the history object
  const navigate1=useNavigate();

  function handledonatechange() {
    setdonate(prevValue => {
      return !prevValue;
    });
    navigate("/ProjectAccount"); // Update the route to '/donate'
  }

  function handlegetFundsChange(){
    setgetFunds(prevValue=>{
      return !prevValue;
    });
    navigate1("/createProjectAccount");
  }

  return (
    <Fragment>
      {
        isdonate?
        (
          (<ProjectAccount/>)
        ):
        (isgetFunds?
          (<CreateProjectAccount/>):
          (
            <div>
              <StartProject handlechange={handledonatechange} handlechangeFunds={handlegetFundsChange}/>
            </div>
          )
        )
      }
    </Fragment>

  );
}

export default Home;
