import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./Keypad.css"

const Keypad = (props) => {
    const dispatch = useDispatch();
    const currentPassword = useSelector(state => state.currentPassword);
    const password = useSelector(state => state.password);
    const addPin = (e) => dispatch({type: 'ADD', payload: e.target.value});
    const removePin = () => dispatch({type: 'REMOVE'});
    const clear = () => dispatch({type: 'CLEAR', payload: ''});

    const passwordShown = () => {
        let value = '';
        for (let i=0; i < currentPassword.length; i++) {
           value = value + '*';
        }
        return value;
    };

    const passwordCheck = () => {
        if (currentPassword.length === 4) {
            if (currentPassword === password) {
                clear()

            }
        }
    };

    console.log(currentPassword)

    return (
        <div className="keypad">
            <input className="textarea" placeholder="Код 4524" value={passwordShown()} readOnly/>
            <div className="btns">
                <button value='9' onClick={addPin}>9</button>
                <button value='8' onClick={addPin}>8</button>
                <button value='7' onClick={addPin}>7</button>
                <button value='4' onClick={addPin}>4</button>
                <button value='5' onClick={addPin}>5</button>
                <button value='6' onClick={addPin}>6</button>
                <button value='1' onClick={addPin}>1</button>
                <button value='2' onClick={addPin}>2</button>
                <button value='3' onClick={addPin}>3</button>
                <button onClick={removePin}><i className="fas fa-long-arrow-alt-left"/></button>
                <button value='0' onClick={addPin}>0</button>
                <button onClick={passwordCheck}><i className="fas fa-check"/></button>
            </div>
        </div>
    )
};

export default Keypad;