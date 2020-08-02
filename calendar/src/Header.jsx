import React from 'react';

const Header = ({ goNext, goPrev, currentWeek, month, nextMonth, today }) => {
    // const mounthList = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];



    return (
        <>
            <header className="header">
                <button className="button-create btn">Создать</button>
                <button onClick={currentWeek} className="button-today btn">Сегодня</button>
                <button onClick={goPrev} className="button-prev "><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                <button onClick={goNext} className="button-next "><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                <span className="mounth">{month}-{nextMonth}</span>

            </header>
        </>

    )
}
export default Header