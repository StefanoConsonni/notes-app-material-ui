import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import SendIcon from "@mui/icons-material/Send";

const useStyles = makeStyles()(() => {
	return {
		btn: {
			backgroundColor: "secondary",
		},
	};
});

export default function Create() {
	const { classes } = useStyles();

	return (
		<Container>
			<Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
				Create a New Note
			</Typography>

			<Button
				type="submit"
				className={classes.btn}
				color="secondary"
				variant="contained"
				endIcon={<KeyboardArrowRightIcon />}
				onClick={() => console.log("you clicked this button!")}>
				Submit
			</Button>
		</Container>
	);
}
