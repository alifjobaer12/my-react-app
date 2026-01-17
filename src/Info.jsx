

function Info(props) {

	const infos = props.information.map((i) => (
		<li className="m-1 card max-w-35 rounded-lg bg-amber-500 border-2 p-2 shadow-2xl flex-col justify-items-center text-center" key={i.id}>
			<span className="font-semibold text-xl text-cyan-200">{i.name}</span>  
            <img className="max-w-20 rounded-3xl p-1.5" src={i.profilePic} alt="" /> 
            <span className="font-normal text-sm text-cyan-200">{i.des}</span> 
		</li>
	));

	return (
		<>
			<ol className="my-10 inline-grid grid-cols-3 gap-5">{infos}</ol>
		</>
	);
}

export default Info
