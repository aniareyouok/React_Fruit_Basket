import React from "react";

function Button({className, type, onClick, btn_message}) {
    return (
        <div className={className}>
            <button
                type={type}
                onClick={onClick}
            >
                {btn_message}
            </button>
        </div>
    )
}

export default Button;