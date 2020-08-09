import React from 'react';
// import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Sidebar from './Sidebar.jsx';
import Week from './Week.jsx';
import moment from 'moment';

class App extends React.Component {
    state = {
        today: moment().week('week'),
        isOpen: false,
        events: [
            { title: 'english', description: 'lesson_1', startTime: '12:30', finishTime: '14:00', date: '2020-08-06' },
            { title: 'spanish', description: 'lesson_2', startTime: '11:30', finishTime: '16:00', date: '2020-08-08' },
            { title: 'bulgarian', description: 'lesson_3', startTime: '17:30', finishTime: '19:00', date: '2020-08-16' },
        ],
       
    };

   

    handleSubmit = (value, e) => {
        e.preventDefault();

        const eventsForm = {
            title: value.title,
            description: value.description,
            startTime: value.startTime,
            finishTime: value.finishTime,
            date: value.date
        }

        this.setState(function(prevState){
            return {events: [...prevState.events, eventsForm]}
        });
        this.hideForm()
    }

    goNext = () => {
        this.setState({
            today: this.state.today.add(1, 'week')
        })
    }
    goPrev = () => {
        this.setState({
            today: this.state.today.add(-1, 'week')
        })
    }
    currentWeek = () => {
        this.setState({
            today: moment().week('week')
        })
    }


    showForm = () => {
        this.setState({
            isOpen: true
        })
    }

    hideForm = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        let today = this.state.today;
        // for week
        let weekStart = today.clone().startOf('isoWeek');
        let weekEnd = today.clone().endOf('isoWeek');
        let days = [];
        for (let i = 0; i <= 6; i++) {
            days.push(moment(weekStart).add(i, 'days').format("YYYY-MM-DD dddd"));
        }

        // let month = moment(today).format("MMM")
        // let nextMonth = moment(today).add(1, 'months').format('MMM')

        // for month
        const firstOfMonth = moment(weekStart).format("MMM");
        const lastOfMonth = moment(weekEnd).format("MMM");


        

        return (
            <>
                <main>
                    <section>
                        <Sidebar />
                    </section>
                    <article>
                        <Navigation
                            goNext={this.goNext}
                            goPrev={this.goPrev}
                            currentWeek={this.currentWeek}
                            days={days}
                            firstOfMonth={firstOfMonth}
                            lastOfMonth={lastOfMonth}
                            events={this.state.events}
                            //data for event
                            handleSubmit={this.handleSubmit}
                            //data for form
                            isOpen={this.state.isOpen}
                            hideForm={this.hideForm}
                            showForm={this.showForm}
                             />
                        <Week
                            days={days}
                            events={this.state.events}
                        />

                    </article>
                </main>
                {/* <ModalForm/> */}
            </>
        );
    };
};

export default App;