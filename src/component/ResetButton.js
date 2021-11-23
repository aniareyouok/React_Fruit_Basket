import React from "react";

function ResetButton({type, onClick}) {
    return (
        <button
            type={type}
            onClick={onClick}
        >
            Reset
        </button>
    )

}

export default ResetButton;