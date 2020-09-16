import React from 'react';
import Hour from './Hour.jsx';
import Event from '../event/Event.jsx';

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
            {
                taskData && taskData.map((item) => {

                    let myData = item.date.split('-');
                    // console.log(myData);
                    let temp = myData[1];
                    myData[1] = myData[2];
                    myData[2] = temp;


                    let date = myData.join().replace(/,/g, "");
                    // console.log(date);
                    let TimeStart = item.startTime.split(':');
                    // console.log(myTimeStart);
                    let TimeFinish = item.finishTime.split(':');
                    // console.log(myTimeFinish);
                    let TimeStartInMinutes = Number(TimeStart[0]) * 60 + Number(TimeStart[1]);
                    // console.log(myTimeStartInMinutes);
                    let TimeFinishInMinutes = Number(TimeFinish[0]) * 60 + Number(TimeFinish[1]);
                    // console.log(myTimeFinishInMinutes);

                    let timeDiff = (TimeFinishInMinutes - TimeStartInMinutes)
                    return (
                        <Event key={`${item.title}${item.description}`} height={timeDiff}
                            top={TimeStartInMinutes}
                            title={item.title}
                            date={item.date}
                            timeStart={item.startTime}
                            timeFinish={item.finishTime}
                            handleDelete={handleDelete}
                            id={item.id}
                        />
                    );
                }
                )
            }
        </div >

    )
}
export default Day;
