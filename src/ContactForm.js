import React, { useState } from "react";
import "./ContactForm.css";
import axios from "axios";

const ContactForm = () => {

    const[value, setValue] = useState(0);

    
    const handleSubmit = (e) => {
    e.preventDefault() 
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    // console.log([...formData.entries()]);
    setValue(value + 1);
    e.currentTarget.reset();
   

   
    fetch('http://localhost:3000/', {
        method: 'POST',
        body: JSON.stringify({formData})
      });
      
    }


    

    


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input id='name'  type="text"
                name="name"
                className="form-input"
                placeholder="Name : " 
                ></input>
                <input id='email' type="email"
                name="email"
                className="form-input"
                placeholder="Email : " 
                ></input>
                <input id='message' type="text"
                name="message"
                className="form-input"
                placeholder="Message : " 
                ></input>
                <button  className="btn" id="btn" type="submit"> Submit </button>
            </form>
        </div>
    )
};


export default ContactForm;