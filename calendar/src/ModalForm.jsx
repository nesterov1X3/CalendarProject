import React from 'react';

const ModalForm = () => {
    return (
        <form className="form-coment">
        <button className="mark-close">+</button>
        <h1>Breakfast with friends</h1>
        <hr className="line-coment"/>
        <div>
            <i className="far fa-clock clock"></i>
            <input className="input-coment_clock" type="text" placeholder="1 февр 2020 15:30 - 16:30"/>
        </div>
        <div>
            <i className="fas fa-align-left"></i>
            <input className="input-coment" type="text" placeholder="Добавить описание"/>

            </div>
        
        <button className="save-btn">Сохранить</button>
    </form>
    );
};

export default ModalForm;