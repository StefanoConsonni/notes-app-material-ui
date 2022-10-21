import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { makeStyles } from "tss-react/mui";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";

const drawerWidth = 240;

const useStyles = makeStyles()(() => {
	return {
		page: {
			background: "#f9f9f9",
			width: "100%",
		},
	};
});

const menuItems = [
	{
		text: "My Notes",
		icon: <SubjectOutlined color="secondary" />,
		path: "/",
	},
	{
		text: "Create Note",
		icon: <AddCircleOutlineOutlined color="secondary" />,
		path: "/create",
	},
];

export default function Layout({ children }) {
	const classes = useStyles();

	return (
		// <div className={classes.root}>
		// 	{/* app bar */}
		// 	<div>app bar</div>

		// 	{/* side drawer */}
		// 	<Drawer className={classes.drawer} variant="permanent" anchor="left" classes={{ paper: classes.drawerPaper }}>
		// 		<div>
		// 			<Typography variant="h5">Material Notes</Typography>
		// 		</div>
		// 	</Drawer>

		// 	{/* main content */}
		// 	<div className={classes.page}>{children}</div>
		// </div>

		<Box sx={{ display: "flex" }}>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="permanent"
				anchor="left">
				<Typography variant="h5" sx={{ marginY: 2, paddingLeft: 2 }}>
					Material Notes
				</Typography>
				<Divider />
				<List>
					{menuItems.map((item) => (
						<ListItem key={item.text} disablePadding>
							<ListItemButton>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>

			{/* main content */}
			<div className={classes.page}>{children}</div>
		</Box>
	);
}
