import React, {useState} from 'react'
// import React, { Component } from 'react';
// import auth from '../firebase'
import './choose.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import auth from './index.jsx';

function LoginForm() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [currentUser, setcurrentUser] = useState('')
    // const [message, setMessage] = useState('')
        // const [data, setData] = useState('')

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     fetch('http://localhost:3000/api/login', {
    //       method: 'POST',
    //       mode: 'cors',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         name: name,
    //         id: id
    //       })
    //     })
    //       .then(response => response.json())
    //       .then(json => {
    //         const accessToken = json.access_token;
    //         props.onSubmit(accessToken);
    //       })
    //       .catch(error => {
    //         props.onSubmitError();
    //       });
    //   };
    // const componentDidMount() {
    //     auth.onAuthStateChanged(user => {
    //       if (user) {
    //         this.setState({
    //           currentUser: user
    //         })
    //       }
    //     })
    // }
    let history = useHistory();

    function handleSubmitiot() {
      history.push("/attendance");
    }
    function handleSubmitcloud() {
        history.push("/cloud");
    }
        // history.push('/home')
        // this.props.history.push('/home')
        // axios.post('http://10.36.3.224:80/register',data)
        // .then( res => {
        //     alert("Success")
        //     setEmail('')
        //     setPassword('')
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    

    // const handleInputChange = e => {
    //     setEmail(e.target.value)
    //     // setId(e.target.value)
    // };

    // const handleIdChange = e => {
    //     setPassword(e.target.value)
    // }
    
    

    return (
        <React.Fragment>
            <div>
                <form className="ChooseLabel" >
                    <h1 className="chooseHeader" color='#FFFFFF' >Choose a Course</h1>
                    {/* <label htmlFor='adminlogin'>
                        <h4 className="adminEmail">EMAIL</h4>
                        <input 
                        type='email' 
                        name="email" 
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        />
                        <h4 className='adminPassword'>PASSWORD</h4>
                        <input 
                        type='password' 
                        name='password'
                        value={password}
                        onChange={handleIdChange}
                        placeholder="Password"
                        />
                    </label> */}
                        {/* <Link to='/home'> */}
                    <button onClick={handleSubmitiot} type="submit" >Internet Of Things</button>
                    <button onClick={handleSubmitcloud} type="submit" >Cloud Computing</button>
                        {/* </Link> */}
                </form>
            </div>
        </React.Fragment>
    )
    
}


export default LoginForm
