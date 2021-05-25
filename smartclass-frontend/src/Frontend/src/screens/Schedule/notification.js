import React, {useState} from 'react'
import './notification.css'
import axios from 'axios';
import {makeStyles} from "@material-ui/core/styles"
import {Select,MenuItem,FormControl,InputLabel} from '@material-ui/core'
// import 'date-fns'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth:150,
        marginTop: theme.spacing(10),
        height:100
    
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));
function Notification() {
    const classes = useStyles();
    const [coursenoti, setCourseNoti] = useState('')
    // const [idnoti, setIdNoti] = useState('')
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
        const data = {Course: coursenoti}
        
        console.log(data)
        setCourseNoti("");
        axios.post('http://18.136.101.197:5000/notify',data)
        .then( res => {
            alert("Success")
            setCourseNoti("");

        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleCoursenotiChange = e => {
        setCourseNoti(e.target.value)
        // setId(e.target.value)
    };

    // const handleIdChange = e => {
    //     setIdNoti(e.target.value)
    // }
    
    

    return (
        // <React.Fragment>
            <div className="Notification">
                
                <h4 className="NotiHeader" >Send Notification</h4>
                <div className="Noti-container">
                {/* <label htmlFor='notification'>
                    <h4 className="studentNamenoti">STUDENT NAME</h4>
                    <input 
                    type='text' 
                    name="name" 
                    value={namenoti}
                    onChange={handleInputChange}
                    placeholder="Name"
                    />
                    <h4 className='studentidnoti'>STUDENT ID</h4>
                    <input 
                    type='text' 
                    name='id'
                    value={idnoti}
                    onChange={handleIdChange}
                    placeholder="ID"
                    />
                </label> */}
                <FormControl variant="outlined" required className={classes.formControl}>
                    <InputLabel style={{ marginTop: '-35px' }}>Select Course</InputLabel>
                    <Select 
                        labelId='select-course'
                        id='course-select'
                        displayEmpty
                        value={coursenoti}
                        style={{ marginTop: '-30px' }}
                        onChange={handleCoursenotiChange}>
                        <MenuItem value={'IOT'} >Internet of Things</MenuItem>
                        <MenuItem value={'CLOUD'}>Cloud Computing</MenuItem>
                    </Select>
                </FormControl>

                <button onClick={handleSubmit} type="submit" >Submit</button>
                </div>
                
            </div>
        // </React.Fragment>
    )
}

export default Notification
