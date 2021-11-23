import React, {useState} from 'react';
import './App.css';
import MinButton from "./component/MinButton";
import PlusButton from "./component/PlusButton";
import ResetButton from "./component/ResetButton";

function App() {

    const [strawberry, setStrawberry] = useState(0)
    const [bananas, setBananas] = useState(0)
    const [kiwi, setKiwi] = useState(0)

    const addStrawberries = () => {
        setStrawberry(strawberry + 1)
    }
    const addBananas = () => {
        setBananas(bananas + 1)
    }
    const addKiwis = () => {
        setKiwi(kiwi + 1)
    }
    const lessStrawberries = ()=> {
        setStrawberry(strawberry - 1)
    }
    const lessBananas = ()=> {
        setBananas(bananas - 1)
    }
    const lessKiwis = ()=> {
        setKiwi(kiwi - 1)
    }
    const reset = ()=> {
        setStrawberry(0) && setBananas(0) && setKiwi(0)
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruitCounter">
                <div className="strawberryCounter">
                    🍓 Aardbeien
                    <MinButton
                        type="button"
                        disabled={strawberry <= 0}
                        id="less_strawberries"
                        onClick={lessStrawberries}
                    />
                    <span id="amount_strawberries">{strawberry}</span>
                    <PlusButton
                        type="button"
                        disabled={strawberry >= 10}
                        id="more_strawberries"
                        onClick={addStrawberries}
                    />
                </div>
                <div className="bananaCounter">
                    🍌 Bananen
                    <MinButton
                        type="button"
                        disabled={bananas <= 0}
                        id="less_bananas"
                        onClick={lessBananas}
                    />
                    <span id="amount_bananas">{bananas} </span>
                    <PlusButton
                        type="button"
                        disabled={bananas >= 10}
                        id="more_bananas"
                        onClick={addBananas}
                    />
                </div>
                <div className="kiwiCounter">
                    🥝 Kiwi's
                    <MinButton
                        type="button"
                        disabled={kiwi <= 0}
                        id="less_kiwi"
                        onClick={lessKiwis}
                    />
                    <span id="amount_kiwi">{kiwi}</span>
                    <PlusButton
                        type="button"
                        disabled={kiwi >= 10}
                        id="more_kiwi"
                        onClick={addKiwis}
                    />
                </div>
                <div className="reset">
                    <ResetButton
                        type="button"
                        onClick={reset}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
