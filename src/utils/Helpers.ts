import { CLIENT_ID, CLIENT_SECRET } from "../spotifyTokens.js";
import axios from "axios";
import { Buffer } from "buffer";

export const get_spotify_token = async () => {
	try {
		const getToken = await axios("https://accounts.spotify.com/api/token", {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization:
					"Basic " +
					new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
			},
			data: "grant_type=client_credentials",
			method: "POST",
		});
		return getToken.data.access_token;
	} catch (error) {
		console.log(error);
	}
};
