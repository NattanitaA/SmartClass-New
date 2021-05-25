// import logo from './logo.svg';
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
// import React from 'react';
import './Loginregis.css';
import RegisterForm from './RegisterForm/RegisterForm.js';
import LoginForm from './LoginForm/LoginForm.js';

// import RegisterForm from './Container/RegisterForm/RegisterForm';
// import LoginForm from './Container/LoginForm/LoginForm';

// import { useSpring, animated } from "react-spring";
// import RegisterLabel from './components/RegisterLabel/RegisterLabel';
// import RegisterForm from './Container/RegisterForm/RegisterForm';

function LoginRegis () {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({ 
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus 
      ? "solid 0px transparent"
      : "solid 2.5px #D35400",  //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2.5px #D35400"
      : "solid 0px transparent", //Animate bottom border of register button
  });

  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          Student Registration
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
          <RegisterForm />
        </animated.form>
      </div>
      {/* <animated.div className="forgot-panel" style={loginProps}>
        <a herf="#">Forgot your password</a>
      </animated.div> */}
    </div>
  );
}
  
//       return(
//         <div>
//           {/* <RegisterForm/> */}
//           {/* <RegisterLabel/> */}
//           <Login/>
//           <Register/>
//         </div>
//       )
// }



export default LoginRegis;
