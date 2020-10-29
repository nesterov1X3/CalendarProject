import React from 'react';
import Day from '../main/Day.jsx'

const Week = ({ days, events, weekStart, weekEnd, handleDelete, createEvent }) => {
    return (
        <>
            {days.map(day => <Day
             key={day}
                dataId={day}
                events={events}
                weekStart={weekStart}
                weekEnd={weekEnd}
                handleDelete={handleDelete}
                createEvent={createEvent}
                />)}

        </>
    )
}
export default Week;
