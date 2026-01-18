import { useState } from "react";
import Button from "./Button";


function Info(props) {

	const [display, setDisplay] = useState(true);

	const infos = props.information.map((i) => (
		<li className="m-1 card max-w-35 rounded-lg bg-amber-500 border-2 p-2 shadow-2xl flex-col justify-items-center text-center" key={i.id}>
			<span className="font-semibold text-xl text-cyan-200">{i.name}</span>  
            <img className="max-w-20 rounded-3xl p-1.5" src={i.profilePic} alt="" /> 
            <span className="font-normal text-sm text-cyan-200">{i.des}</span> 
		</li>
	));

	return (
		<>
			<button className="w-2xs text-xl border-5 rounded-2xl p-4" onClick={()=> setDisplay(display => !display)} >{display ? "Hide" : "Show"} </button> <br />

			<ol className={`my-10 grid-cols-3 gap-5 ${display ? "inline-grid" : "hidden"}`} >{infos}</ol>
		</>
	);
}

export default Info
