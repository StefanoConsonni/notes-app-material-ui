import { useState } from "react";
import { useHistory } from "react-router-dom";

// Material UI
import { Typography, Button, Container, TextField, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from "@mui/material";
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
	const [category, setCategory] = useState("");
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (title == "") {
			setTitleError(true);
		}
		if (details == "") {
			setDetailsError(true);
		}
		if (title && details) {
			fetch("http://localhost:8000/notes", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({ title, details, category }),
			}).then(() => history.push("/"));
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

				<FormControl className={classes.field}>
					<FormLabel>Note Category</FormLabel>
					<RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
						<FormControlLabel value="money" control={<Radio color="secondary" />} label="Money" />
						<FormControlLabel value="todos" control={<Radio color="secondary" />} label="Todos" />
						<FormControlLabel value="reminders" control={<Radio color="secondary" />} label="Reminders" />
						<FormControlLabel value="work" control={<Radio color="secondary" />} label="Work" />
					</RadioGroup>
				</FormControl>

				<Button type="submit" color="secondary" variant="contained" endIcon={<KeyboardArrowRightIcon />}>
					Submit
				</Button>
			</form>
		</Container>
	);
}
