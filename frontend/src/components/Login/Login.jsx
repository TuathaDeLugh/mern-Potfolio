import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import "./login.css"
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(login(email, password));
      };
  return (
    <div className="login">
    <div className="loginContainer">
      <form className="loginForm" onSubmit={submitHandler}>
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>

        <div className='data'>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" >
            Login
          </Button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login