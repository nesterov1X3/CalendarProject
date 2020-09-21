import React from 'react';
import Hour from './Hour.jsx';
import Event from '../event/Event.jsx';

import './day.scss'

const Day = ({ dataId, events, handleDelete }) => {

    let taskData = [];
    // console.log(dataId)
    taskData = events.filter(({ date }) => date === dataId.split(' ')[0]);

    // console.log(taskData);
    let hoursItems = [];
    for (let i = 0; i <= 23; i++) {
        hoursItems.push(<Hour key={i} dataId={dataId.split(' ')[0]} />);
    }

    return (

        <div className='items' >
            {hoursItems}
                
                        <Event
                        //  key={`${item.title}${item.description}`} height={timeDiff}
                            taskData={taskData}
                            handleDelete={handleDelete}
                        />
        </div >

    )
}
export default Day;



   //     let myData = item.date.split('-');
                //     // console.log(myData);
                //     let temp = myData[1];
                //     myData[1] = myData[2];
                //     myData[2] = temp;


                //     let date = myData.join().replace(/,/g, "");
                  
                //     let TimeStart = item.startTime.split(':');
                 
                //     let TimeFinish = item.finishTime.split(':');
                    
                //     let TimeStartInMinutes = Number(TimeStart[0]) * 60 + Number(TimeStart[1]);
                    
                //     let TimeFinishInMinutes = Number(TimeFinish[0]) * 60 + Number(TimeFinish[1]);
                    

                //     let timeDiff = (TimeFinishInMinutes - TimeStartInMinutes)