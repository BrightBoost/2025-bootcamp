import { useState } from "react";

function SecondExampleState(props) {
    const [person, setPerson] = useState({ name: "", age: 0 })

    function handleChangePerson(event) {
        setPerson({
            ...person,
            [event.target.name]: event.target.value
        })
    }
    return (
        <>
            <p>{person.name} is {person.age} years old.</p>
            <label for="age">Age: </label><input id="age" name="age" type="number" onChange={handleChangePerson}></input><br></br>
            <label for="name">Name: </label><input id="name" name="name" type="text" onChange={handleChangePerson}></input>
        </>
    )
}

export default SecondExampleState