import React from "react";
import "./SignUpForm.css";

function SignUpForm() {
  return (
    <form className="FormSignUp">
      <h1>Sign up</h1>
      <label>Name</label>
      <input type="text" placeholder="Enter Your Name" required></input>
      <label>Email</label>
      <input type="Email" placeholder="Enter Your Email"></input>
      <button className="Sign-up">Sign UP</button>
    </form>
  );
}

export default SignUpForm;
