
import React from 'react';
import Day from './Day.jsx'

const Week = ({ days, events, weekStart, weekEnd, handleDelete }) => {
    return (
        <>
            {days.map(day => <Day
             key={day}
                dataId={day}
                events={events}
                weekStart={weekStart}
                weekEnd={weekEnd}
                handleDelete={handleDelete}
                
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