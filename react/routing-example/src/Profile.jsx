import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Profile() {
    const { id } = useParams();
    const [ user, setUser ] = useState({});

    useEffect(() => {
        fetch("https://dummyjson.com/users/" + id)
            .then(response => response.json())
            .then(data => setUser(data));
    }, []);

    return (
        user ?
            <h1>Welcome {user.firstName}</h1> :
            <h1>Hi stranger</h1>
    )
}

export default Profile;