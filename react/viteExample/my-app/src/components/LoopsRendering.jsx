function LoopsRendering() {
    const colors = ["pink", "purple", "black"];

    return (
        <ul>
            {colors.map((color, index) => {
                return <li key={index}>{color}</li>
            })}
        </ul>
    )
}

export default LoopsRendering;