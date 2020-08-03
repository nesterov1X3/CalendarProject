  
import React from 'react';
import Hour from './Hour.jsx'


const Day = () => {
    let hours = [];
    for (let i = 0; i <=23; i++) {
        hours.push(<Hour key={i} />);
    }
    return (
        < li className='items' >
            {hours}
        </li >
    )
}
export default Day;


// import React from 'react';
// import Hour from './Hour.jsx'

// const Day = () => {
//     return (
//         <>
//         <Hour/>
//         <div className="row-list">
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//                 <div className="row-item_child"></div>
//             </div>
//             </>
//     );
// };

// export default Day;