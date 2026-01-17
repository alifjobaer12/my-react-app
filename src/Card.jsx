import PropTypes from 'prop-types'

function Card(props) {
	return (
		<>
			<div className="m-1 card max-w-55.5 h-auto rounded-lg bg-cyan-200 border-2 p-4 shadow-2xl inline-block">
				<div className="flex-col justify-items-center">
					<div className="max-w-[70%] h-auto mb-2 flex-col justify-items-center">
						<img
							className="rounded-3xl"
							src={props.profilePic}
							alt="Profile Picture"
						/>
					</div>
				</div>
				<div>
					<h3 className="text-black font-bold text-2xl mx-3">{props.name}</h3>
					<p className="text-sm text-gray-600 font-semibold mx-3">
						{props.des}
					</p>
				</div>
			</div>
		</>
	);
}

Card.propTypes = {
    name : PropTypes.string,
    profilePic : PropTypes.string,
    des : PropTypes.string,
}

export default Card;
