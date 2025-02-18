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

export default Profile;