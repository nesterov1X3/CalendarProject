import React from 'react';
import { render } from 'react-dom';
import moment from 'moment'





class Event extends React.Component {


    render() {
        const { top, height, title, date, timeStart, timeFinish } = this.props;
        const formatTime = moment().format("YYYYDDMMHHmm");

        const event = `${date.replace(/-/g, "")}${timeStart.replace(':', "")}`;
        const finish = Number(formatTime) > Number(event);
        const timeItem = finish ? 'event event-check' : 'event';
        return (<>
            <div className={timeItem} style={{
                height: height,
                top: top,
            }}>
                <span>{title}</span>
                <div className='event-of-task'>{`${timeStart} - ${timeFinish}`}</div>
            </div>
        </>
        )
    }
}
export default Event