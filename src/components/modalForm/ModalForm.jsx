import React from 'react';
import { render } from 'react-dom';

import './modalForm.scss'


export class ModalForm extends React.Component {
    constructor() {
        super()
        this.state = {
            title: ' ',
            description: ' ',
            date: ' ',
            finishTime: ' ',
            startTime: ' ',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })

    }

    render() {
        const { isOpen, onClose, createEvent } = this.props;

        // console.log(this.state.finishTime)
        // console.log(this.state.startTime)
         const TimeContext = React.createContext(this.state.startTime)
         console.log(TimeContext)

        if (!isOpen) {
            return null;
        }
        return (
            <>
                <form className="form-coment" onSubmit={(e) => createEvent(this.state, e)}>
                    <button onClick={onClose} className="mark-close">+</button>
                    <input className="title-input"
                        type="text"
                        placeholder="drink"
                        name="title"
                        value={this.state.value}
                        onChange={this.handleChange} />
                    <hr className="line-coment" />
                    <label >
                        {/* <i className="far fa-clock clock"></i> */}
                        <input className="input-coment_clock"
                            type="date"
                            name="date"
                            id="date"
                            value={this.state.value}
                            onChange={this.handleChange} />

                        <input className="input-coment_clock"
                            type="time"
                            name="startTime"
                            value={this.state.value}
                            id="startTime"
                            onChange={this.handleChange} />
                        <input className="input-coment_clock"
                            type="time"
                            name="finishTime"
                            id="finishTime"
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                    <label className="description">
                        {/* <i className="rise fas fa-align-left"></i> */}
                        <input className="input-coment"
                            type="text"
                            name="description"
                            placeholder="Добавить описание"
                            value={this.state.value}
                            onChange={this.handleChange} />

                    </label>

                    <button className="save-btn" type="submit">Сохранить</button>
                </form>
               
            </>
        );
    }
};


