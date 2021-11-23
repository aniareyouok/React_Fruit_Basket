import React from "react";

function PlusButton({type, id, value, onClick}) {
    return (
            <button
                type={type}
                id={id}
                value={value}
                onClick={onClick}
            >
                +
            </button>
        )
    };

export default PlusButton;