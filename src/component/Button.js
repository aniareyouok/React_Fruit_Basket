import React from "react";

function Button({className, type, onClick, btn_message, disabled}) {
    return (
        <div className={className}>
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
            >
                {btn_message}
            </button>
        </div>
    )
}

export default Button;