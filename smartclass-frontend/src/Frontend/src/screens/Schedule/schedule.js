import React from 'react'
// import "styles.css"
import 'date-fns'
import axios from 'axios';
import TimeField from 'react-simple-timefield';
import './schedule.css'
import DateFnsUtils from '@date-io/date-fns'
import TextField from '@material-ui/core/TextField';
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import Stack from '@material-ui/core/Stack';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import TimePicker from '@material-ui/lab/TimePicker';
// import DesktopTimePicker from '@material-ui/lab/DesktopTimePicker';

import {makeStyles} from "@material-ui/core/styles"
import {Select,MenuItem,FormControl,InputLabel} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import {MuiPickersUtilsProvider,KeyboardTimePicker}from '@material-ui/pickers'

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

export default function Schedule() {
    const classes = useStyles();
    const [course,setCourse] = React.useState('');
    // const handleCourseChange = e => setCourse(e.target.value);
    const [selectedTime,setTime] = React.useState('');
    const [stop,setStop] = React.useState('');
    // const handleTimeChange = e => setTime(e.target.value);
    // const data = {Course:value}
    // const handleTimeChange = e => setTime(e.target.value);

    const handleCourseChange = e => {
        setCourse(e.target.value)
        // setId(e.target.value)
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }


    // const handleCourseChange = e => {
    //     setStop(e.target.value)
    //     // setId(e.target.value)
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {Course: course, Time:selectedTime}
        // this.props.history.push('/home')
        
        console.log(data)
        axios.post('http://18.136.101.197:5000/selecttime',data)
        .then( response => {
            alert("Success")
            setCourse('')
            setTime('')
        })
        .catch(err => {
            console.log(err)
        })
    }
    const handleCancel = (e) => {
        e.preventDefault();
        const cancel = {stop}
        // this.props.history.push('/home')
        
        console.log(cancel)
        axios.post('http://18.136.101.197:5000/stop',cancel)
        .then( response => {
            alert("Success")
            setCourse('')
            setTime('')
        })
        .catch(err => {
            console.log(err)
        })
    }



    // console.log(data)
    return(
        <div className="Schedule">
            <h4 className="scheduleHeader"> Please select your course and time!</h4>
            <div className="sche-container">
                <FormControl variant="outlined" required className={classes.formControl}>
                    <InputLabel style={{ marginTop: '-35px' }}>Select Course</InputLabel>
                    <Select 
                        labelId='select-course'
                        id='course-select'
                        displayEmpty
                        value={course}
                        style={{ marginTop: '-30px' }}
                        onChange={handleCourseChange}>
                        <MenuItem value={'IOT'} >Internet of Things</MenuItem>
                        <MenuItem value={'CLOUD'}>Cloud Computing</MenuItem>
                    </Select>
                </FormControl>
                
                <TimeField 
                className ="timefield" 
                value={selectedTime} 
                onChange={handleTimeChange}
                style={{
                    border: '1px solid #666',
                    fontSize: 30,
                    width: 87,
                    height:57,
                    padding: '2px 5px',
                    marginTop: '50px',
                    marginRight: '33px',
                    color: '#333',
                    borderRadius: 3
                }}/>
                <button  onClick={handleSubmit} type="submit" style={{
                  
                    marginTop: '-100px',
       
                }}>Start</button>
                <button value={stop} onClick={handleCancel} type="submit">Stop</button>
            </div>
            
        </div>




        
    );
}

