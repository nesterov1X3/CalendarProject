import React from 'react';

const Navigation = () => {
    return(
        <>
        <ul className="list-item_weeks">
                <li className="list-item-weeks_days">пн</li>
                <li className="list-item-weeks_days">вт</li>
                <li className="list-item-weeks_days">ср</li>
                <li className="list-item-weeks_days">чт</li>
                <li className="list-item-weeks_days">пт</li>
                <li className="list-item-weeks_days">сб</li>
                <li className="list-item-weeks_days">вс</li>
            </ul>
        <ul class="list-item_num">
                <li class="list-item-num_days">27</li>
                <li class="list-item-num_days">28</li>
                <li class="list-item-num_days">29</li>
                <li class="list-item-num_days">30</li>
                <li class="list-item-num_days">31</li>
                <li class="list-item-num_days">1</li>
                <li class="list-item-num_days">2</li>
            </ul>
            </>
    )
}
export default Navigation