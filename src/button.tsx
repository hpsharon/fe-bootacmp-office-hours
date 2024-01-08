import React, {MouseEventHandler} from 'react';


function Button(props: ButtonProps) {
    const { onClick, buttonText } = props;

    return (
        <button onClick={onClick} >{buttonText}</button>
    )
}

export interface ButtonProps {
    onClick: (event:any) => void;
    buttonText: string;
}

export default Button;