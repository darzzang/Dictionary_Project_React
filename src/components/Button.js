import React from 'react'
import './Button.css'

const Button = ({ children, width, handleClick, disabled }) => {
    return <button 
                className={`Button ${width}`} 
                onClick={handleClick} disabled={disabled}
            >{children}</button>
}

export default Button;

Button.defaultProps = {
    disabled: false
}