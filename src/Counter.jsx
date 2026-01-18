import { useState } from "react";

function Counter() {

    const [ctn, setCtn] = useState(0);

    const increment = () => {
        setCtn(ctn+1);
    };
    const decrement = () => {
        setCtn(ctn-1);
    };
    const reset = () => {
        setCtn(0);
    };

    return(
        <>
            <h1 className="text-4xl text-center my-8 font-bold text-green-600">Counter Program</h1>
            
            <h1 className="text-4xl text-center my-8 font-bold text-green-600"> {ctn} </h1>

            <div className="flex justify-items-center">
                <button className="m-5 w-lg h-16 border-3 rounded-2xl text-2xl text-blue-400 hover:bg-blue-800" onClick={() => decrement()}>Decrement</button> <br/>
                <button className="m-5 w-lg h-16 border-3 rounded-2xl text-2xl text-blue-400 hover:bg-blue-800" onClick={() => reset()}>Reset</button> <br/>
                <button className="m-5 w-lg h-16 border-3 rounded-2xl text-2xl text-blue-400 hover:bg-blue-800" onClick={() => increment()}>Increment</button> <br/>
            </div>
        </>
    );
}

export default Counter;