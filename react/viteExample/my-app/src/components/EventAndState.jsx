import { useState } from "react";

function EventAndState() {
    const [name, setName] = useState("");

    function handleClickMagicButton() {
        console.log(`✨✨ Hi ${name}. From a function ✨✨`);
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <>
            <p>Hello {name}</p>
            <button onClick={handleClickMagicButton}>✨Magic function✨</button>
            <input type="text" onChange={handleChange} />
        </>
    )
}



export default EventAndState