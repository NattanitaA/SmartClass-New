import React from 'react';
import './timetable.css';

import { Inject,ScheduleComponent,Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

class Timetable extends React.Component {
    render(){
        return <ScheduleComponent currentView='Month'>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda] } />
        </ScheduleComponent>
    }
}

export default Timetable