import React, {useState} from "react";
import assets from '../../assets';
import "./contact.css";


const Contact = () => {
    const [msg, setMsg] = useState({
        name : "",
        email : "",
        message : ""
      });
    
      // Handle Inputs
      const handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
    
        setMsg({...msg, [name]:value});
      }
    
      // Handle Submit
      const handleSubmit = async (event)=>{
        event.preventDefault();
        // Object DeStructuring
        // Store Object Data into Variables
        const {name, email, message} = msg;
        try {
          //It is Submitted on port 3000 by default
          // Which is Front End but we need to 
          // Submit it on Backend which is on 
          // Port 3001. So we need Proxy.
          const res = await fetch('/message', {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              name, email, message
            })
          })
          console.log(res.status)
          if(res.status === 400 || !res){
            window.alert("Message Not Sent. Try Again Later")
          }else{
            window.alert("Message Sent");
            setMsg({
              name : "",
              email : "",
              message : ""
            })
            
          }
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <div>
        <section>
            <div className="containerForm">
                <div className="rowHeader">
                    <div className='headerContainer'>
                        <h3 className="h3Container">Contact Us</h3>
                        <h1 className="h1Container">Have Some <b className='big'>Question?</b> Services</h1>
                        <div className='hr'></div>
                    </div>
                </div>
                <div className="formRow">
                    <div className='imageDiv'>
                        <img src={assets.freshCare} alt='customerMain' className='imageContainer' />
                    </div>
                    <div className='formColumn'>
                        <form onSubmit={handleSubmit} method="POST">
                            <div className='nameForm'>
                                <label htmlFor="name" className='form-label'>
                                    Your Name
                                </label>
                                <input
                                type='text'
                                className='form-control'
                                id='name'
                                placeholder='John Doe'
                                name="name"
                                value={msg.name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='emailForm'>
                                <label htmlFor="exampleFormControlInput1" className='form-label'>
                                    Email address
                                </label>
                                <input
                                type='email'
                                className='form-control'
                                id='exampleFormControlInput1'
                                placeholder='name@example.com'
                                name="email"
                                value={msg.email}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='msgForm'>
                                <label htmlFor="exampleFormControlInput1" className='form-label'>
                                    Your Message
                                </label>
                                <textarea
                                className='form-control'
                                id='exampleFormControlTextarea1'
                                rows="5"
                                name="message"
                                value={msg.message}
                                onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type='submit' className='btnForm'>Send Message <i className='fa fa-paper-plane ms-2'></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact