  
import React from 'react';
import Hour from './Hour.jsx'


const Day = ({dataId}) => {
    let hours = [];
    
    for (let i = 0; i <=23; i++) {
        hours.push(<Hour key={i} dataTime={i}/>)
    }

    return (
        < li className='items' dataId={dataId.split(' ')[0]} >
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