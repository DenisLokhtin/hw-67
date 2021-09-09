import React from 'react';
import "./Keypad.css"

const Keypad = (props) => (
    <div className="keypad">
        <input className="textarea" placeholder="Код 4524" value="****" readOnly/>
        <div className="btns">
            <button>9</button>
            <button>8</button>
            <button>7</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button><i className="fas fa-long-arrow-alt-left"/></button>
            <button>0</button>
            <button><i className="fas fa-check"/></button>
        </div>
    </div>
);

export default Keypad;