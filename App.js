import React, { Component, useState } from "react";
import SignupForm from './components/SignupForm';
import loginForm from './components/LoginForm';
import "./App.css";
// import { Component } from "react";
// import { useState } from 'react';

function App() {
  const adminUser = {
    firstname: "salaama",
    lastname: "mohamed"
  }

  const Signup = details => {
    console.log(details);
  }  
  
  
  const login = () => {
    console.log("login");
  }


  return (
    <div className="App">
     <SignupForm Signup={Signup} />
     
    </div>
  )
};
   
   export default App