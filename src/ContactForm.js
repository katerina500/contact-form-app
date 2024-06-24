import React, { useState } from "react";
import "./ContactForm.css";
import axios from 'axios';
import Converter from './Converter';

const ContactForm = () => {

    const [formData,setFormData] = useState({
    name: '',
    email: '',
    message: ''
 });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name] : e.target.value});
    };

    
    const handleSubmit = (e) => {
    e.preventDefault(); 


    axios
      .post('http://localhost:5000/form', formData)
        
      .then(response => {
        
        console.log('Data sent successfully:', response);
        
      })
        
      .catch(error => {
         
        console.error('There was an error sending the data:', error);
        
    });
        
    }  



    return(
        <div>
            <form className="fileInput" id="fileInput" onSubmit={handleSubmit}>
                <input id='name'  type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
                className="form-input"
                placeholder="Name : " 
                ></input>
                <input id='email' type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                className="form-input"
                placeholder="Email : " 
                ></input>
                <input id='message' type="text"
                value={formData.message}
                onChange={handleChange}
                name="message"
                className="form-input"
                placeholder="Message : " 
                ></input>
                <button  className="btn" id="btn" type="submit"> Submit </button>
            </form>
            <div>
            <Converter />
            </div>
        </div>
    )
};


export default ContactForm;