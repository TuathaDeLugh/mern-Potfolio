import React, { useState } from 'react'
import "./contact.css"
import { Button } from '@mui/base'
import { Typography } from '@mui/material';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const contactFormHandler = (e) => {
    e.preventDefault();
    // dispatch(contactUs(name, email, message));
  };
  return (
    <div className="contact">
      <div className="contactRightBar"></div>
        <div className="contactContainer">
          <form className="contactContainerForm">
          <Typography variant="h4">Contact Us</Typography>
            <input type="text" required
            placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <input type="email" required
            placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <textarea cols={"30"} rows={"10"} required value={message}
              onChange={(e) => setMessage(e.target.value)} placeholder='Message'>

              </textarea>
            <Button variant="contained" type="submit">
              Send
            </Button>
          </form>
        
      </div>
    </div>
  )
}

export default Contact