import React, {useState} from 'react'
// import React, { Component } from 'react';
// import auth from '../firebase'
import './LoginForm.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import auth from './index.jsx';

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currentUser, setcurrentUser] = useState('')
    const [message, setMessage] = useState('')
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
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        auth.onAuthStateChanged(user => {
            if (user) {
                setcurrentUser(user)
            }
          })
        // const url = '/register'
        // history.push('/home')
        const data = {Email: email, Password:password}
        // this.props.history.push('/home')
        
        console.log(data)
        axios.post('http://18.136.101.197:5000/login',data)
        .then( response => {
            alert("Success")
            setEmail('')
            setPassword('')
        })
        .catch(err => {
            console.log(err)
        })
        auth
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                setcurrentUser(response.user)
                history.push('/home')
            })
            
            .catch(error => {
                
                setMessage(error.message)
                
            })
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
    }

    const handleInputChange = e => {
        setEmail(e.target.value)
        // setId(e.target.value)
    };

    const handleIdChange = e => {
        setPassword(e.target.value)
    }
    
    

    return (
        <React.Fragment>
            <div>
                <form className="loginputLabel" onSubmit={handleSubmit}>
                    <h1 className="loginHeader" >LOGIN</h1>
                    <label htmlFor='adminlogin'>
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
                    </label>
                        {/* <Link to='/home'> */}
                            <button onClick={handleSubmit} type="submit" >Submit</button>
                        {/* </Link> */}
                </form>
            </div>
        </React.Fragment>
    )
    
}


export default LoginForm
