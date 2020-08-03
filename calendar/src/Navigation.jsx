import React from 'react';
import moment from 'moment';
import Header from './Header.jsx';
import Week from './Week.jsx'


class Navigation extends React.Component {

    state = {
        today: moment().week('week'),
    }

    goNext = () => {
        this.setState({
            today: this.state.today.add(1, 'days')
        })
    }
    goPrev = () => {
        this.setState({
            today: this.state.today.add(-1, 'days')
        })
    }
    currentWeek = () => {
        this.setState({
            today: moment().week('week')
        })
    }

 
 


    render() {
        let today = this.state.today;
        
        let weekStart = today.clone().startOf('isoWeek');
        let days = [];
        for (let i = 0; i <= 6; i++) {
            days.push(moment(weekStart).add(i, 'days').format("DD dddd"));
        }

        let month = moment(today).format("MMM")
        let nextMonth = moment(today).add(1, 'months').format('MMM')


        let weekEnd = today.clone().endOf('isoWeek');
        // console.log(weekStart);
        // console.log(weekEnd);


        const firstOfMonth = moment(weekStart).format("MMM")
        const lastOfMonth = moment(weekEnd).format("MMM")

        // console.log(firstOfMonth);
        // console.log(lastOfMonth);

        return (
            <>
                <Header
                    goNext={this.goNext}
                    goPrev={this.goPrev}
                    currentWeek={this.currentWeek}
                    firstOfMonth={firstOfMonth}
                    lastOfMonth={lastOfMonth}
                    // showForm={this.showForm}
                    // hideForm={this.hideForm}
                    // isOpen={this.state.isOpen}
                />
                {days.map(day => {
                    const date = day.split(' ')[0];
                    const weekDay = day.split(' ')[1];
                    return (
                        <ul className='list-item_num' key={day}>
                            <li className='list-item-weeks_days' >{weekDay}</li>
                            <li className='list-item-num_days'>{date}</li>
                        </ul>
                    )
                })}
                <Week
                    days={days} />
            </>
        )
    }
}
export default Navigation;


{/* <li className="list-item-weeks_days">пн</li>
                    <li className="list-item-weeks_days">вт</li>
                    <li className="list-item-weeks_days">ср</li>
                    <li className="list-item-weeks_days">чт</li>
                    <li className="list-item-weeks_days">пт</li>
                    <li className="list-item-weeks_days">сб</li>
                    <li className="list-item-weeks_days">вс</li> */}
{/* <ul class="list-item_num">
                    <li class="list-item-num_days">27</li>
                    <li class="list-item-num_days">28</li>
                    <li class="list-item-num_days">29</li>
                    <li class="list-item-num_days">30</li>
                    <li class="list-item-num_days">31</li>
                    <li class="list-item-num_days">1</li>
                    <li class="list-item-num_days">2</li>
                </ul>  */} 