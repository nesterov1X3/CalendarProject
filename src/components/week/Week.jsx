
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




// import React from 'react';



// const Week = () => {
//     return(
//         <div className="column-list">
//                 <div className="column-item_child"></div>
//                 <div className="column-item_child"></div>
//                 <div className="column-item_child"></div>
//                 <div className="column-item_child"></div>
//                 <div className="column-item_child"></div>
//                 <div className="column-item_child"></div>
//                 <div className="column-item_child"></div>
//             </div> 
//     );
// };
// export default Week;