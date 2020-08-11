import React from 'react';
// import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Sidebar from './Sidebar.jsx';
import Week from './Week.jsx';
import moment from 'moment';

const baseUrl = 'https://crudcrud.com/api/f330272816444a60bf9720af2c34516c/events';

class App extends React.Component {
    state = {
        today: moment().week('week'),
        isOpen: false,
        events: [],

    };

    componentDidMount() {
        this.fetchEventsList()
    }

    fetchEventsList = () => {
        fetch(baseUrl).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(eventsList => {
            // const events = eventsList.map(({ _id, ...event }) => ({
            //     id: _id,
            //     ...event,
            // }));
            this.setState({
                events: eventsList
            });
        });
    }




    createEvent = (value, e) => {
        e.preventDefault();

        const eventsForm = {
            title: value.title,
            description: value.description,
            startTime: value.startTime,
            finishTime: value.finishTime,
            date: value.date,
            id: `${value.date}${value.timeStart}${value.timeFinish}`
        }
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(eventsForm),
        }).then(response => {
            if (response.ok) {
                this.fetchEventsList()
            } else {
                throw new Error('Failed to create event')
            }
        });
        // this.setState(function(prevState){
        //     return {events: [...prevState.events, eventsForm]}
        // });
        this.hideForm()

    }


    handleDeleteEvent = id => {
        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) {
                this.fetchEventsList()
            } else {
                throw new Error('Failed to delete event')
            }
        });
        // const updatedEvents = this.state.events.filter(event => event.id !== id);
        // this.setState({ events: updatedEvents }) 
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
                            createEvent={this.createEvent}
                            //data for form
                            isOpen={this.state.isOpen}
                            hideForm={this.hideForm}
                            showForm={this.showForm}
                        //btnDelete

                        />
                        <Week
                            days={days}
                            events={this.state.events}
                            handleDelete={this.handleDeleteEvent}
                        />

                    </article>
                </main>
                {/* <ModalForm/> */}
            </>
        );
    };
};

export default App;