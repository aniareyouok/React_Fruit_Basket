import React, {useState} from 'react';
import './App.css';
import Counter from "./component/Counter";
import ResetButton from "./component/ResetButton";

function App() {

    const [strawberry, setStrawberry] = useState(0)
    const [banana, setBanana] = useState(0)
    const [apple, setApple] = useState(0)
    const [kiwi, setKiwi] = useState(0)

    function reset() {
        setStrawberry(0);
        setBanana(0);
        setApple(0);
        setKiwi(0);
    }


    // function handleSubmit(e) {
//     console.log(`Naam: ${state.nameValue} Leeftijd: ${state.ageValue} Opmerking: ${state.messageValue}`);
//     e.preventDefault();
//
// }

    return (
        <>

        <div className="fruitbasket">
            <h1>Fruitmand bezorgservice</h1>
            <div className="counters">
                <h2>Mijn fruitmandje</h2>
                <Counter
                    icon="🍓   "
                    fruit="Aardbeien"
                    count={strawberry}
                    setCount={setStrawberry}
                />
                <Counter
                    icon="🍌   "
                    fruit="Bananen"
                    count={banana}
                    setCount={setBanana}
                />
                <Counter
                    icon="🍎   "
                    fruit="Appelen"
                    count={apple}
                    setCount={setApple}
                />
                <Counter
                    icon="🥝   "
                    fruit="Kiwi's"
                    count={kiwi}
                    setCount={setKiwi}
                />
            </div>
                <ResetButton
                    onClick={reset}
                />
        </div>

            {/*<div className="form_container">*/}
                {/*<form>*/}
                {/*    <fieldset>*/}
                {/*        <label htmlFor="customerName">Name: </label>*/}
                {/*        <input*/}
                {/*        type="text"*/}
                {/*        id="customerName"*/}
                {/*        value={e.target.value}*/}
                {/*        setValue={()=> {setValue(e.target.value)};*/}
                {/*        />*/}
                {/*        <label htmlFor="customerName">Name: </label>*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            id="customerName"*/}
                {/*        />*/}
                {/*    </fieldset>*/}
                {/*</form>*/}


        </>
    );
}

export default App;
