import React from "react";
import Add from "../img/addAvatar.png"

const Login = () => {
  return <div>
     <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
          <p>You don't have an account ? Register</p>
        </form>
      </div>
    </div>
  </div>;
};

export default Login;