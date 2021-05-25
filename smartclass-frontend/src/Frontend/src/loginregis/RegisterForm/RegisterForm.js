import React, {useState} from 'react'
import './RegisterForm.css'
import axios from 'axios';


function RegisterForm() {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // const url = '/register'
        const data = {Name: name, Id:id}
        
        console.log(data)
        setName("");
        setId("");
        axios.post('http://18.136.101.197:5000/register',data)
        .then( res => {
            alert("Success")
            setName('')
            setId('')
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleInputChange = e => {
        setName(e.target.value)
        // setId(e.target.value)
    };

    const handleIdChange = e => {
        setId(e.target.value)
    }
    
    

    return (
        <React.Fragment>
            <div>
                <form className="inputLabel" onSubmit={handleSubmit}>
                    <h1 className="registerHeader" >REGISTER</h1>
                    <label htmlFor='studentregister'>
                        <h4 className="studentName">STUDENT NAME</h4>
                        <input 
                        type='text' 
                        name="name" 
                        value={name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        />
                        <h4 className='studentid'>STUDENT ID</h4>
                        <input 
                        type='text' 
                        name='id'
                        value={id}
                        onChange={handleIdChange}
                        placeholder="ID"
                        />
                    </label>
                    <button onClick={handleSubmit} type="submit" >Submit</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default RegisterForm
