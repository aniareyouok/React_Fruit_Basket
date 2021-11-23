import React, {useState} from 'react';
import './App.css';
import MinButton from "./component/MinButton";
import PlusButton from "./component/PlusButton";

function App() {

    const [count, setCount] = React.useState("0")
    const addToCount = ()=> {
        setCount(count + 1)
    }
    const substractFromCount = ()=> {
        setCount(count - 1)
    }

    function Counter() {

    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruitCounter">
                <div className="strawberryCounter">
                    Aardbeien
                    <MinButton
                        type="button"
                        id="less_strawberries"
                        onClick={Counter}
                    />
                    <span id="amount_strawberries">0</span>
                    <PlusButton
                        type="button"
                        id="more_strawberries"
                        onClick={Counter}
                    />
                </div>
                <div className="banaanTeller">
                    Bananen
                    <MinButton />
                    <PlusButton />
                </div>
                <div className="kiwiTeller">
                    Kiwi's
                    <MinButton />
                    <PlusButton />
                </div>
            </div>
        </>
    );
}

export default App;
