import React from "react";

function ResetButton({onClick}) {
    return (
        <div className="reset">
            <button
                type="button"
                onClick={onClick}
            >
                Reset
            </button>
        </div>
    )
}

export default ResetButton;