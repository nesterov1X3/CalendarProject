import React from 'react';
import './sidebar.scss'
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,'00']
const Sidebar = () => {
    return (
        <ul className="list-times">
            <div>GMT+02</div>
            {numbers.map((number) =>
                <div key ={number}>{`${number}:00`}
                </div>)}
        </ul>
    );
};
export default Sidebar;
