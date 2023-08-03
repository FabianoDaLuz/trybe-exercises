import '../src/assets/Button.css';
import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
};

function Button({ children, style }: ButtonProps) {
    return <button className="styled-btn"
        style={style}>{children}</button>
}

export default Button;