
import React from 'react';
import Day from './Day.jsx'

const Week = ({ days }) => {
      
    return (
        <>
            {days.map(day => <Day key={day} dataId={day} />)}
            
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