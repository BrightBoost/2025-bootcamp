import React from "react";

function DisplayData({formData}) {
    if(!formData.name) {
        return <p>No data...</p>;
    } else {
        return (
            <div>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
            </div>
        )
    }
}

export default DisplayData;