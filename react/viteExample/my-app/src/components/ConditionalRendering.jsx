import { useState } from "react";

function ConditionalRendering(props) {
    const [isGreetingVisible, setIsGreetingVisible] = useState(false);

    function handleClick() {
        setIsGreetingVisible(!isGreetingVisible);
    }

    return (
        <>
            {props.show == "true" ? <p>It's true!</p> : <p>It's false!</p>}
            <button onClick={handleClick}>{isGreetingVisible ? "Hide" : "Show"} greeting</button>
            {isGreetingVisible && <p>Oh, hello!</p>}
        </>
    )
}

export default ConditionalRendering;