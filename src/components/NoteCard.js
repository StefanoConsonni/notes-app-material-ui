import { Typography, Card, CardHeader, CardContent, IconButton, Avatar } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function NoteCard({ note, handleDelete }) {
	return (
		<div>
			<Card elevation={1}>
				<CardHeader
					avatar={<Avatar>{note.category[0].toUpperCase()}</Avatar>}
					action={
						<IconButton onClick={() => handleDelete(note.id)}>
							<DeleteOutlinedIcon />
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary">
						{note.details}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
