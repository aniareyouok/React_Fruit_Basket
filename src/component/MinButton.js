import React from "react";

function MinButton({type, id, value, onClick, disabled}) {
    return (
        <button
            type={type}
            id={id}
            value={value}
            onClick={onClick}
            disabled={disabled}
        >
            -
        </button>
    )
};

export default MinButton;