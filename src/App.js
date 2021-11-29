import React, {useState} from 'react';
import './App.css';
import Counter from "./component/Counter";
import Button from "./component/Button";

function App() {

    //FRUIT BASKET COUNTER STATE
    const [strawberry, setStrawberry] = useState(0)
    const [banana, setBanana] = useState(0)
    const [apple, setApple] = useState(0)
    const [kiwi, setKiwi] = useState(0)

    //COUNTER RESET BUTTON
    function reset() {
        setStrawberry(0);
        setBanana(0);
        setApple(0);
        setKiwi(0);
    }

    //ORDER FORM STATE
    const [state, setState] = useState({
        name: "",
        surname: "",
        age: 0,
        zip: "",
        message: "",
    })

    //SET STATE FOR NAME, SURNAME, AGE, ZIP and MESSAGE IN ORDER FORM
    function handleChange(e) {
        const value = e.target.value;
        setState({...state, [e.target.name]: value});
    }

    //STATE FOR FREQUENCY, TERMS AND SUBMIT BUTTON
    const [delivery_time, setDelivery_time] = useState(false)
    const [frequency, setFrequency] = useState("");
    const [checkedTerms, toggleCheckedTerms] = useState(false);
    const [clicked, toggleClicked] = useState(false);


    //CLICKING SUBMIT BUTTON
    function handleClick() {
        console.log(`Bestelling is verstuurd!`);
        toggleClicked(!clicked);
    }

    //SENDING FORM
    function onSubmit(e) {
        console.log(`
            Naam: ${state.name} 
            Achternaam: ${state.surname} 
            Leeftijd: ${state.age} 
            Postcode: ${state.zip} 
            Bezorg frequentie: ${frequency} 
            Bezorgtijd: ${delivery_time} 
            Opmerkingen: ${state.message} 
            Akkoord met voorwaarden: ${checkedTerms} 
            `);
        console.log(`
            Fruitmand
            Aardbeien: ${strawberry}
            Bananen: ${banana}
            Appels: ${apple}
            Kiwi's: ${kiwi}
        `)
        e.preventDefault();
    }


    return (
        <>
            <div className="wrapper">

                {/*FRUIT COUNTERS*/}
                <div className="fruitbasket">
                    <h1>Fruitmand bezorgservice</h1>
                    <div className="counters">
                        <h2>Mijn fruitmandje</h2>
                        <Counter
                            icon="🍓"
                            fruit="Aardbeien"
                            count={strawberry}
                            setCount={setStrawberry}
                        />
                        <Counter
                            icon="🍌"
                            fruit="Bananen"
                            count={banana}
                            setCount={setBanana}
                        />
                        <Counter
                            icon="🍎"
                            fruit="Appelen"
                            count={apple}
                            setCount={setApple}
                        />
                        <Counter
                            icon="🥝"
                            fruit="Kiwi's"
                            count={kiwi}
                            setCount={setKiwi}
                        />
                    </div>
                    <Button
                        className="reset"
                        type="button"
                        onClick={reset}
                        btn_message="Reset"
                        disabled={false}
                    />
                </div>

                {/*ORDER FORM*/}
                <div className="orderform">
                    <form onSubmit={onSubmit}>
                        <h3>Bestel gegevens</h3>

                        <label htmlFor="firstname_input">Voornaam:</label>
                        <input
                            type="text"
                            id="firstname_input"
                            name="name"
                            value={state.name}
                            onChange={handleChange}
                        />

                        <label htmlFor="surname_input">Achternaam:</label>
                        <input
                            type="text"
                            id="surname_input"
                            name="surname"
                            value={state.surname}
                            onChange={handleChange}
                        />

                        <label htmlFor="age_input">Leeftijd:</label>
                        <input
                            type="number"
                            id="age_input"
                            name="age"
                            value={state.age}
                            onChange={handleChange}
                        />

                        <label htmlFor="zipcode_input">Postcode:</label>
                        <input
                            type="text"
                            id="zipcode_input"
                            name="zip"
                            value={state.zip}
                            onChange={handleChange}
                        />

                        <label htmlFor="frequency_dropdown">Bezorgfrequentie</label>
                        <select
                            name="Frequency"
                            id="frequency_dropdown"
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}
                        >
                            <option value="Make_a_choice">Maak een keuze</option>
                            <option value="weekly">Iedere week</option>
                            <option value="every_second_week">Elke twee weken</option>
                            <option value="monthly">Eens per maand</option>
                        </select>

                        <span className="delivery_time_buttons">
                            <label htmlFor="daytime">Overdag</label>
                            <input
                                type="radio"
                                id="daytime"
                                name="Delivery_time"
                                value="overdag"
                                onChange={(e) => setDelivery_time(e.target.value)}
                            />
                            <label htmlFor="evening">'sAvonds</label>
                            <input
                                type="radio"
                                id="evening"
                                name="Delivery_time"
                                value="avond"
                                onChange={(e) => setDelivery_time(e.target.value)}
                            />
                        </span>

                            <label htmlFor="message_input">Opmerkingen:</label>
                            <textarea
                                id="message_input"
                                name="message"
                                cols="27"
                                rows="4"
                                value={state.message}
                                onChange={handleChange}
                            />

                        <span className="terms_of_conditions">
                            <input
                                type="checkbox"
                                id="terms_of_conditions"
                                name="Agrees_to_terms_of_conditions?"
                                checked={checkedTerms}
                                onChange={() => toggleCheckedTerms(!checkedTerms)}
                            />
                            <label htmlFor="terms_of_conditions"> Ik ga akkoord met de voorwaarden</label>
                        </span>

                        <span className="submit_button">
                            <Button
                                className="submit_button"
                                type="submit"
                                id="submit_button"
                                btn_message="Versturen"
                                disabled={!checkedTerms}
                                onClick={handleClick}
                            />
                        </span>

                    </form>
                </div>
            </div>

        </>
    );
}

export default App;
