import React from 'react';
import moment from 'moment';
import OutsideClickHandler from 'react-outside-click-handler';
import PropTypes from 'prop-types';
import './event.scss'


class Event extends React.Component {

    state = {
        isOpen: false,
        disabled: PropTypes.false
    }

    outsideClick = () => {
        this.setState({
            isOpen: false


        });
    }

    showBtnDelete = (event) => {
        event.preventDefault();
        this.setState({
            isOpen: true,
            disabled: PropTypes.true

        })
    }

    render() {
        const { handleDelete, taskData } = this.props;
        return (
            taskData && taskData.map((item) => {

                let myData = item.date.split('-');
            
                let temp = myData[1];
                myData[1] = myData[2];
                myData[2] = temp;

                let date = myData.join().replace(/,/g, "");
            
                let timeStart = item.startTime.split(':');
                let timeFinish = item.finishTime.split(':');
                let TimeStartInMinutes = Number(timeStart[0]) * 60 + Number(timeStart[1]);
                let TimeFinishInMinutes = Number(timeFinish[0]) * 60 + Number(timeFinish[1]);



                const formatTime = moment().format("YYYYDDMMHHmm");

                const event = `${item.date.replace(/-/g, "")}${item.startTime.replace(':', "")}`;
                const finish = Number(formatTime) > Number(event);
                let source = `${item.startTime} - ${item.finishTime}`

                return (
                    <>
                        <div className={finish ? 'event event-check' : 'event'}
                            onContextMenu={this.showBtnDelete}
                            style={{
                                height:  TimeFinishInMinutes - TimeStartInMinutes,
                                top: Number(timeStart[0]) * 60 + Number(timeStart[1]),
                            }}>

                            <OutsideClickHandler
                                disabled={!this.state.isOpen}
                                onOutsideClick={() => {
                                    this.outsideClick(); console.log('1');
                                }}
                            >
                                {this.state.isOpen && <button
                                    className='button-event-delete' onClick={() => handleDelete(item.id)}>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                    <span style={{ margin: "10px" }}>Delete</span>
                                </button>} </OutsideClickHandler>

                            <span>{item.title}</span>
                            <div className='event-of-task'>{source}</div>
                        </div>
                    </>
                )
            })
        )
    }

}
export default Event;
