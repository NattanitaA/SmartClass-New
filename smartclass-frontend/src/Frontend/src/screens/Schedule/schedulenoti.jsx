// import logo from './logo.svg';
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
// import React from 'react';
import './schedulenoti.css';
import ScheduleForm from './schedule.js';
import NotificationForm from './notification.js';

// import RegisterForm from './Container/RegisterForm/RegisterForm';
// import LoginForm from './Container/LoginForm/LoginForm';

// import { useSpring, animated } from "react-spring";
// import RegisterLabel from './components/RegisterLabel/RegisterLabel';
// import RegisterForm from './Container/RegisterForm/RegisterForm';

function ScheduleNoti () {
  const [notificationFormStatus, setNotificationFormStatus] = useState(false);
  const scheduleProps = useSpring({ 
    left: notificationFormStatus ? -500 : 0, // Login form sliding positions
  });
  const notificationProps = useSpring({
    left: notificationFormStatus ? -500 : 0, // Register form sliding positions 
  });

  const scheduleBtnProps = useSpring({
    borderBottom: notificationFormStatus 
      ? "solid 0px transparent"
      : "solid 2.5px #D35400",  //Animate bottom border of login button
  });
  const notificationBtnProps = useSpring({
    borderBottom: notificationFormStatus
      ? "solid 2.5px #D35400"
      : "solid 0px transparent", //Animate bottom border of register button
  });

  function notificationClicked() {
    setNotificationFormStatus(true);
  }
  function scheduleClicked() {
    setNotificationFormStatus(false);
  }

  return (
    <div className="schedule-notification-wrapper">
      <div className="sche-nav-buttons">
        <animated.button
          onClick={scheduleClicked}
          className="scheduleBtn"
          style={scheduleBtnProps}
        >
          Schedule
        </animated.button>
        <animated.button
          onClick={notificationClicked}
          className="notificationBtn"
          style={notificationBtnProps}
        >
          Notification
        </animated.button>
      </div>
      <div className="form-groups">
        <animated.form action="" className="scheduleform" style={scheduleProps}>
          <ScheduleForm  />
        </animated.form>
        <animated.form action="" className="notificationform" style={notificationProps}>
          <NotificationForm />
        </animated.form>
        
      </div>
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



export default ScheduleNoti;
