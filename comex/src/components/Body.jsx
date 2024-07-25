import { useState } from "react";

const Body = () => {
    const handleOnChange = (e) => setText(e.target.value)

    return (
        <div>
            <input onChange={handleOnChange} />
            <div>{Text}</div>
        </div>
    )
}

export default Body;