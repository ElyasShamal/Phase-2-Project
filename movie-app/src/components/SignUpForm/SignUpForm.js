import React from "react";
import "./SignUpForm.css";

function SignUpForm() {
  return (
    <form className="FormSignUp">
      <label for="name">Name</label>
      <input type="text" placeholder="Enter Your Name" required></input>
      <label>Email</label>
      <input type="Email" placeholder="Enter Your Email"></input>
      <button>Sign UP</button>
    </form>
  );
}

export default SignUpForm;
