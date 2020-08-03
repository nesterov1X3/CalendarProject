import React from 'react';
import Month from './Month.jsx'
import ModalForm from './ModalForm.jsx'
import { render } from 'react-dom';

class Header extends React.Component {
    state = {
        isOpen: false,
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
        const { goNext, goPrev, currentWeek, firstOfMonth, lastOfMonth } = this.props
        return (
            <>
                <header className="header">
                    
                    <button onClick={this.showForm} className="button-create btn">Создать</button>
                    <ModalForm onClose={this.hideForm} isOpen={this.state.isOpen} title="some title"/>
                    
                    <button onClick={currentWeek} className="button-today btn">Сегодня</button>
                    <button onClick={goPrev} className="button-prev "><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                    <button onClick={goNext} className="button-next "><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                    <Month
                        firstOfMonth={firstOfMonth}
                        lastOfMonth={lastOfMonth}
                    />

                </header>
            </>

        )
    }

}
export default Header