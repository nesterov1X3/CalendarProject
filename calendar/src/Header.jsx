import React from 'react';
import Month from './Month.jsx'
import ModalForm from './ModalForm.jsx'


class Header extends React.Component {
    

    
    render() {
        const { goNext, goPrev, currentWeek, firstOfMonth, lastOfMonth, createEvent, isOpen, hideForm, showForm } = this.props
        return (
            <>
                <header className="header">
                    <div>
                    <button onClick={showForm} className="button-create btn">Создать</button>
                    <ModalForm onClose={hideForm}
                     isOpen={isOpen}
                     //data for event
                     createEvent={createEvent}/>
                    </div>
                    <button onClick={currentWeek} className="button-today btn">Сегодня</button>
                    <button onClick={goPrev} className="button-prev "><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                    <button onClick={goNext} className="button-next "><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                    <Month
                        firstOfMonth={firstOfMonth}
                        lastOfMonth={lastOfMonth}
                    />

                </header>
            </>

        );
    };

};
export default Header;