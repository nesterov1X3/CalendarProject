import React from 'react';
import Header from '../header/Header.jsx';
import './navigation.scss'

const Navigation = ({ goNext, goPrev, currentWeek, firstOfMonth, lastOfMonth, days, createEvent, isOpen, hideForm, showForm }) => {
    return (
        <>
            <Header
                goNext={goNext}
                goPrev={goPrev}
                currentWeek={currentWeek}
                firstOfMonth={firstOfMonth}
                lastOfMonth={lastOfMonth}
                createEvent={createEvent}
                isOpen={isOpen}
                hideForm={hideForm}
                showForm={showForm}
            />
            {days.map(day => {
                const date = day.split(' ')[0].split('-')[2]
                const weekDay = day.split(' ')[1];
                return (
                    
                     <ul className='list-item_num' key={day}>
                        <div className='list-item-weeks_days' >{weekDay}</div>
                        <div className='list-item-num_days'>{date}</div>
                     </ul>
                )
            })}
        </>
    )
};
export default Navigation;


