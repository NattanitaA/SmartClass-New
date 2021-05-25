import React from 'react'
// import Registerlabel from '../RegisterLabel/RegisterLabel';
import Registerform from '../../Container/RegisterForm/RegisterForm';

import '../Register/Register.css'


function Register() {
    return (
        <div className="register-student">
            {/* <div className='nav-buttons'> */}
            {/* <Registerlabel/> */}
            {/* </div> */}
            <div className="form-group">
            <Registerform/>
            </div>
      </div>
    )
}

export default Register


