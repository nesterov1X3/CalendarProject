import React from 'react';

const Header = () => {
    return (
        <header className="header">
        <button className="button-create btn ">+ Создать</button>
        <button className="button-today btn">Сегодня</button>
        <button className="button-prev ">&#60</button>
        <button className="button-next ">&#62</button>
        <span className="mounth">Янв-февр 2020</span>
    </header>
    )
}
export default Header