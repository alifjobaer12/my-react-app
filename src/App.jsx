import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Info from "./Info.jsx";

import profilePic from "./assets/My_Profile_Pic.jpg";

const info = [
	{
		id: 1,
		name: "Cute",
		des: "Sutdent of BUBT",
		profilePic:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/316d032c-bec3-472a-a2c0-bc21535d9f7b-profile_image-300x300.png",
	},
	{
		id: 2,
		name: "Cute",
		des: "Sutdent of BUBT",
		profilePic:
			"https://wallpapers.com/images/thumbnail/cute-anime-profile-pictures-kh59l3wg2ycnbv79.jpg",
	},
	{
		id: 3,
		name: "Cute",
		des: "Sutdent of BUBT",
		profilePic:
			"https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg",
	},
	{
		id: 4,
		name: "Cute",
		des: "Sutdent of BUBT",
		profilePic:
			"https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg",
	},
	{
		id: 5,
		name: "Cute",
		des: "Sutdent of BUBT",
		profilePic:
			"https://wallpapers.com/images/thumbnail/cute-anime-profile-pictures-0lifptfs0jd9fml3.webp",
	},
	{
		id: 6,
		name: "Cute",
		des: "Sutdent of BUBT",
		profilePic:
			"https://wallpapers.com/images/thumbnail/cute-anime-profile-pictures-ocsp6rlknshumiuw.jpg",
	},
];

function App() {
	return (
		<>
			<Header />
			<div>
				<Card
					name="Cute"
					profilePic="https://static-cdn.jtvnw.net/jtv_user_pictures/316d032c-bec3-472a-a2c0-bc21535d9f7b-profile_image-300x300.png"
					des="Sutdent of BUBT"
				/>
				<Card
					name="Cute"
					profilePic="https://wallpapers.com/images/thumbnail/cute-anime-profile-pictures-kh59l3wg2ycnbv79.jpg"
					des="Sutdent of BUBT"
				/>
				<Card
					name="Cute"
					profilePic="https://wallpapers.com/images/thumbnail/cute-anime-profile-pictures-ocsp6rlknshumiuw.jpg"
					des="Sutdent of BUBT"
				/>
				<Card
					name="Cute"
					profilePic="https://wallpapers.com/images/thumbnail/cute-anime-profile-pictures-0lifptfs0jd9fml3.webp"
					des="Sutdent of BUBT"
				/>
				<Card
					name="Cute"
					profilePic="https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg"
					des="Sutdent of BUBT"
				/>
				<Card
					name="Cute"
					profilePic="https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg"
					des="Sutdent of BUBT"
				/>
			</div>

			<Info information={info} />

			<Footer />
		</>
	);
}

export default App;
