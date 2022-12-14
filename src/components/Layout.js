import { AppBar, Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = 240;

const menuItems = [
	{
		text: "All Notes",
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
	const history = useHistory();

	return (
		<>
			{/* app bar */}
			<AppBar elevation={0} sx={{ width: `calc(100% - ${drawerWidth}px)` }}>
				<Toolbar>
					<Typography sx={{ flexGrow: 1 }}>Today is the {format(new Date(), "do MMMM Y")}</Typography>
					<Typography>Giovanni Pozzi</Typography>
					<Avatar sx={{ bgcolor: "purple", marginLeft: "10px" }}>GP</Avatar>
				</Toolbar>
			</AppBar>
			{/* side drawer */}
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
							<ListItem button key={item.text} onClick={() => history.push(item.path)} sx={{ padding: 1.5 }} disablePadding>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItem>
						))}
					</List>
				</Drawer>

				{/* main content */}
				<div style={{ width: "100%", background: "#f9f9f9", padding: "16px" }}>
					<div style={{ height: "86px" }}></div>
					{children}
				</div>
			</Box>
		</>
	);
}
