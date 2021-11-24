import React from "react";

function Counter({icon, fruit, count, setCount}) {
    return (
        <div className="counter">
            <h2>
                <icon>{icon}</icon>
                {fruit}
            </h2>
            <div className="buttons">
                <button
                    type="button"
                    onClick={() => setCount(count - 1)}
                    disabled={count <= 0}
                    setCount={setCount}
                    count={count}
                >
                    -
                </button>

                <span className="amount">{count}</span>

                <button
                    type="button"
                    onClick={() => setCount(count + 1)}
                    disabled={count >= 10}
                    setCount={setCount}
                    count={count}
                >
                    +
                </button>
            </div>

        </div>
    )
}

export default Counter;