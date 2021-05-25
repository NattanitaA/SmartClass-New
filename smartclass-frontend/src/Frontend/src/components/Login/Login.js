import React from 'react'
// import Registerlabel from '../RegisterLabel/RegisterLabel';
import Loginform from '../../Container/LoginForm/LoginForm';

import '../Login/Login.css'


function Login() {
    return (
        <div className="login-admin">
            {/* <div className='nav-buttons'> */}
            {/* <Registerlabel/> */}
            {/* </div> */}
            <div className="form-group">
            <Loginform/>
            </div>
      </div>
    )
}

export default Login


