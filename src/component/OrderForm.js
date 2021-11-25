import React, {useState} from "react";
import Button from "./Button";

function OrderForm() {

    const [state, setState] = useState( {
        name: "",
        surname: "",
        age: 0,
        zip: "",
        message: "",
    })

    function handleChange(e) {
        const value = e.target.value;
        setState({...state,[e.target.name]:value});
    }

    function onSubmit(e) {
        console.log(`Naam: ${state.name} Achternaam: ${state.surname} Age: ${state.age} Zip: ${state.zip} Message: ${state.message}`);
        e.preventDefault();
    }

    return (
        <>
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
                >
                    <option value="daily">Dagelijks</option>
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
                    value="Overdag"
                />
                <label className="sAvonds" htmlFor="evening">'sAvonds</label>
                <input
                    type="radio"
                    id="evening"
                    name="delivery_time"
                    value="'s Avonds"
                />
                </span>

                <label htmlFor="message_input">Opmerkingen:</label>
                <textarea
                    id="message_input"
                    cols="27"
                    name="message"
                    rows="4"
                    value={state.message}
                    onChange={handleChange}
                />

                <span className="terms_of_conditions">
                    <input
                        type="checkbox"
                        id="terms_of_conditions"
                        name="Agrees to terms of conditions?"
                    />
                    <label htmlFor="terms_of_conditions"> Ik ga akkoord met de voorwaarden</label>
                </span>
                <span className="submit_button">
                    <Button
                        className="submit_button"
                        type="submit"
                        id="submit_button"
                        btn_message="Versturen"
                    />
                </span>


            </form>
        </>
    )
}

export default OrderForm