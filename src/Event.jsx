import React from 'react';
import moment from 'moment';
import OutsideClickHandler from 'react-outside-click-handler';
import PropTypes from 'prop-types';





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
        const { top, height, title, date, timeStart, timeFinish, handleDelete, id } = this.props;
        const formatTime = moment().format("YYYYDDMMHHmm");

        const event = `${date.replace(/-/g, "")}${timeStart.replace(':', "")}`;
        const finish = Number(formatTime) > Number(event);
        const timeItem = finish ? 'event event-check' : 'event';
        return (<>
            <div className={timeItem}
             onContextMenu={this.showBtnDelete}
             style={{
                height: height,
                top: top,
            }}>

                <OutsideClickHandler
                    disabled={!this.state.isOpen}
                    onOutsideClick={() => {
                        this.outsideClick(); console.log('1');
                    }}
                >
                    {this.state.isOpen && <button
                        className='button-event-delete' onClick={() => handleDelete(id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        <span style={{ margin: "10px" }}>Delete</span>
                    </button>} </OutsideClickHandler>


                <span>{title}</span>
                <div className='event-of-task'>{`${timeStart} - ${timeFinish}`}</div>
            </div>
        </>
        )
    }
}
export default Event;