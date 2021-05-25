import React, { Component } from 'react';
import { HashRouter as RouteIt, Switch, Route } from 'react-router-dom';
import Home from '../screens/home/Home';
// import Home from '../screens/Home';
import Layout from '../layout/Layout';
import Layouta from '../layoutattendance/Layouta';
import LoginRegis from '../loginregis/Loginregis.jsx';
import Attendance from '../screens/attendance/attendance';
// import LoginRegis from '../screens/loginregis/Loginregis'
import Timetable from '../screens/timetable/timetable';
import Schedule from '../screens/Schedule/schedule';
import Choose from '../screens/Choose/choose';
import Cloud from '../screens/cloud/cloud';
import Notification from '../screens/Schedule/notification';
import Schedulenoti from '../screens/Schedule/schedulenoti'
class Router extends Component {
    render() {
        return (

            <RouteIt>
                <Switch>
                    <Route exact path="/" component={LoginRegis} />
                    <Route path="/home" component={Home} />
                    <Route path="/student" component={Layout} />
                    <Route path="/attendance" component={Attendance} />
                    <Route path="/choose" component={Choose} />
                    <Route path="/timetable" component={Timetable} />
                    <Route path="/schedule" component={Schedulenoti}/>
                    <Route path="/cloud" component={Cloud} />
                    {/* <Redirect to='/' /> */}


                </Switch>
            </RouteIt>

        )
    }
}

export default Router;
