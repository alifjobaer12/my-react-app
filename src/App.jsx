import Header from "./Header";
import Footer from "./footer";
import Card from "./Card";

import profilePic from "./assets/My_Profile_Pic.jpg";

function App() {
	return (
		<>
			<Header />
			<div>
				<Card name="Cute" profilePic="https://static-cdn.jtvnw.net/jtv_user_pictures/316d032c-bec3-472a-a2c0-bc21535d9f7b-profile_image-300x300.png" des="Sutdent of BUBT" />
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
			<Footer />
		</>
	);
}

export default App;
