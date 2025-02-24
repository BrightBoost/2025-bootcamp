import React, { useState } from "react";

function SignUpForm({formData, onFormSubmit, confirmation}) {

    const [localFormData, setLocalFormData] = useState(formData);
    function handleSubmit(e) {
        e.preventDefault();
        onFormSubmit(e, localFormData);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLocalFormData({
            ...localFormData,
            [name]: value
        });
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" value={localFormData.name} onChange={handleChange} required />
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" value={localFormData.email} onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
        { confirmation ?
            <p>{confirmation}</p> : ""
        }
    
        </>
    )
}

export default SignUpForm;