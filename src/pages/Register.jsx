import React from "react";
import Add from "../img/addAvatar.png"

const Register = () => {
  return <div>
     <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          <p>You do have an account ? Login</p>
        </form>
      </div>
    </div>
  </div>;
};

export default Register;
