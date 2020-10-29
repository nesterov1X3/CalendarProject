import React from 'react';
import Hour from './Hour.jsx';
import Event from '../event/Event.jsx';

import './day.scss'

const Day = ({ dataId, events, handleDelete }) => {

    let taskData = [];
    taskData = events.filter(({ date }) => date === dataId.split(' ')[0]);

    let hoursItems = [];
    for (let i = 0; i <= 23; i++) {
        hoursItems.push(<Hour key={i} dataId={dataId.split(' ')[0]} />);
    }

    return (

        <div className='items' >
            {hoursItems}
                
                        <Event
                            taskData={taskData}
                            handleDelete={handleDelete}
                        />
        </div >

    )
}
export default Day;
