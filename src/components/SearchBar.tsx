// import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled, lighten, darken } from "@mui/system";
const MOODS = [" SAD 😔", " HAPPY 🤪"];

const SearchBar: React.FC = () => {
	return (
		<Box>
			<Autocomplete
				id="grouped-demo"
				options={MOODS}
				sx={{ width: 300 }}
				renderInput={(params) => <TextField {...params} label="moods" />}
			></Autocomplete>
		</Box>
	);
};

export default SearchBar;
