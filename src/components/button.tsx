import React from "react";

interface Props{
    onClick?: () => void;
    text: string;
    className: string;
}

export function Button(props: Props) {
    return (
        <button onClick={props.onClick} className={props.className}>
            {props.text}
        </button>
    )
}