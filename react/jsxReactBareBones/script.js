const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

// using a variable
// let name = "Zia";
// root.render(<p>This is {name}</p>);


// using a function
// function getDescription() {
//     return "A super cool text!";
// }

// root.render(<p>{getDescription()}</p>)

// component
// function Profile() {
//     return (
//         <div>
//             <h2>A heading</h2>
//             <p>Text</p>
//         </div>
//     )
// }

// root.render(<><Profile /><Profile /></>)

// component with variables
function Profile(prop) {
    return (
        <div>
            <h2>{prop.name}</h2>
            <p>{prop.age}</p>
            <ul>
                {prop.hobbies.map(hobby => {
                    return <li key={hobby}>{hobby}</li>
                })}
            </ul>
        </div>
    )
}

function ProfileContainer() {
    let persons = [
        {
            name: "Aljesa",
            age: 25,
            hobbies: ["photography", "traveling"]
        },
        {
            name: "Kavya",
            age: 25,
            hobbies: ["cook dessert", "eat desserts"]
        },
        {
            name: "Binupa",
            age: 25,
            hobbies: ["dress design", "gardening"]
        }
    ];

    return (
        <div>
            {persons.map(person => {
                return (
                    <Profile name={person.name} age={person.age} hobbies={person.hobbies} />
                )
            })}
        </div>
    )
}

root.render(<ProfileContainer />)