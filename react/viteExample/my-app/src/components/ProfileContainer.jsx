import Profile from "./Profile";

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
                    <Profile key={person.name} name={person.name} age={person.age} hobbies={person.hobbies} />
                )
            })}
        </div>
    )
  }
  
  export default ProfileContainer