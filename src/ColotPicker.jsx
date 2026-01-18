import { useState } from "react";

function ColorPicker() {


    const [color, setColor] = useState("#ffffff")

    const changeColor = (event) => {
         setColor(event.target.value);
    };

    return(
        <>
            <div className="flex-col justify-items-center font-[Arial]">
                <h1 className={`text-4xl text-center my-8 font-bold`} style={{ color: color }}>Color Picke</h1>
                    <div className="w-70 h-70 border-4 rounded-2xl text-2xl text-center py-5 font-semibold" style={{ background: color }}>
                        <p>Selected Color <br /> {color} </p>
                    </div>
                    <div className="py-5 text-2xl text-center">
                        <label htmlFor="" className="p-4"> Select Color </label>
                        <input type="color" className="rounded-sm w-20 h-10 border-2" value={color} onChange={changeColor} />
                    </div>
            </div>
        </>
    );
}

export default ColorPicker;