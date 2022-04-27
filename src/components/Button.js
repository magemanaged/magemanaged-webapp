import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

const STYLES = ['btn--primary', 'btn--submit', 'btn--interact'];

const SIZES = ['btn--large', 'btn--medium', 'btn--small'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, valid}) => {
    const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <div className="btn-wrapper">
        <button className={`btn ${checkBtnStyle} ${checkBtnSize} ${valid ? '' : 'invalidClick'}`} onClick={valid ? onClick : null} type={type}>
            {children}
        </button>
        </div>
    )
}