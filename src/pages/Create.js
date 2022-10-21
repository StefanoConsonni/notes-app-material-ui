import { useState } from "react";
import { Typography, Button, Container, TextField } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles()(() => {
	return {
		field: {
			marginTop: 20,
			marginBottom: 20,
			display: "block",
		},
	};
});

export default function Create() {
	const { classes } = useStyles();
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (title == "") {
			setTitleError(true);
		}
		if (details == "") {
			setDetailsError(true);
		}
		if (title && details) {
			console.log(title, details);
		}
	};

	return (
		<Container>
			<Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
				Create a New Note
			</Typography>

			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					onChange={(e) => setTitle(e.target.value)}
					className={classes.field}
					label="Note Title"
					variant="outlined"
					color="secondary"
					fullWidth
					error={titleError}
					required
				/>
				<TextField
					onChange={(e) => setDetails(e.target.value)}
					className={classes.field}
					label="Details"
					variant="outlined"
					color="secondary"
					fullWidth
					multiline
					rows={4}
					error={detailsError}
					required
				/>
				<Button
					type="submit"
					color="secondary"
					variant="contained"
					endIcon={<KeyboardArrowRightIcon />}
					onClick={() => console.log("you clicked this button!")}>
					Submit
				</Button>
			</form>
		</Container>
	);
}
