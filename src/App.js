import SpotifyPlayer from "react-spotify-web-playback";
import { get_spotify_token } from "./utils/Helpers.ts";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar.tsx";
import Box from "@mui/material/Box";

function App() {
	const [spotifyToken, setSpotifyToken] = useState("");
	useEffect(() => {
		setSpotifyToken(get_spotify_token());
		console.log(spotifyToken, "token");
	}, []);
	return (
		<Box sx={{ border: "1px dashed grey" }}>
			What is your mood today?
			<SearchBar />
		</Box>
	);
}

export default App;
