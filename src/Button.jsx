import React, { useState } from "react";

function Button() {

    const [ctn, setCtn] = useState(false);

    const click = (e) => {
        if(!ctn) {
            e.target.textContent = "Ouch! 😥";
            setCtn(true);
            return;
        }
        e.target.textContent = "Click Me 😲";
        setCtn(false);
    };
    
    return(
        <>
            <button onClick={(e) => click(e)} className="w-2xs text-xl border-5 rounded-2xl p-4">Click Me 😲</button>
        </>
    );
}

export default Button