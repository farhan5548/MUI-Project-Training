import * as React from "react";
import { Box, Card, CardContent, Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import WifiIcon from "@mui/icons-material/Wifi";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import black_lambo from "../assets/black_lambo.jpg";
import jeep from "../assets/jeep.jpg";
import Goku from "../assets/Goku.jpg";
import red_goku from "../assets/red_goku.png";
import GTR from "../assets/GTR.jpg";
import dell from "../assets/dell.png";
import hp from "../assets/hp.png";
import lenovo from "../assets/lenovo.png";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function DataDisplay() {
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <Stack direction={"row"} spacing={5}>
        {/* Images */}

        <Badge
          badgeContent={5}
          color="error"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Avatar
            src={Goku}
            alt="Goku"
            sx={{ width: 72, height: 72 }}
            variant="square"
          />
        </Badge>

        <Badge
          variant="dot"
          color="success"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Avatar
            src={red_goku}
            alt="Red-Goku"
            sx={{ width: 72, height: 72 }}
            variant="rounded"
          />
        </Badge>
        <Avatar src={jeep} alt="JEEP" sx={{ width: 72, height: 72 }} />
        <Avatar src={GTR} alt="GTR" sx={{ width: 72, height: 72 }} />
        <Avatar src={black_lambo} alt="Lambo" sx={{ width: 72, height: 72 }} />
        {/* Letter Avatars */}
        <Avatar sx={{ width: 72, height: 72 }}>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500], width: 72, height: 72 }}>
          N
        </Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500], width: 72, height: 72 }}>
          OP
        </Avatar>
      </Stack>
      {/* Avatar Groups */}
      <AvatarGroup max={4}>
        <Avatar src={Goku} alt="Goku" sx={{ width: 48, height: 48 }} />
        <Avatar src={red_goku} alt="Red-Goku" sx={{ width: 48, height: 48 }} />
        <Avatar src={jeep} alt="JEEP" sx={{ width: 48, height: 48 }} />
        <Avatar src={GTR} alt="GTR" sx={{ width: 48, height: 48 }} />
        <Avatar src={black_lambo} alt="Lambo" sx={{ width: 48, height: 48 }} />
      </AvatarGroup>
      <Stack spacing={1} sx={{ alignItems: "center" }}>
        <Stack direction="row" spacing={1}>
          <Chip label="primary" color="primary" />
          <Chip label="success" color="success" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip label="primary" color="primary" variant="outlined" />
          <Chip label="success" color="success" variant="outlined" />
        </Stack>
      </Stack>
      <Chip
        sx={{ bgcolor: "violet" }}
        avatar={<Avatar sx={{ bgcolor: "yellow" }}>F</Avatar>}
        label="Farhan"
      />
      {/* List */}
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>

      <Card variant="outlined" sx={{ maxWidth: 360, marginY: "20px" }}>
        <CardContent>
          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              p: "3px",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Toothbrush
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              $4.50
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{ padding: 2, color: "text.secondary" }}
          >
            Mr Bean takes you on a walk to the park or just down the hall.
          </Typography>
          <Divider />
        </CardContent>
        <Box sx={{ p: 2 }}>
          <Typography variant="body1">Select type</Typography>
          <Stack direction={"row"} gap={5} py={2}>
            <Chip label="Soft" size="small" />
            <Chip label="Medium" size="small" />
            <Chip label="Hard" size="small" />
          </Stack>
        </Box>
      </Card>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Dell" src={dell} />
          </ListItemAvatar>
          <ListItemText
            primary="Dell Laptops"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  Value for money
                </Typography>
                {" the best prices laptops in the market..."}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="HP" src={hp} />
          </ListItemAvatar>
          <ListItemText
            primary="Hp Laptops"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  Value for money
                </Typography>
                {" the best prices laptops in the market..."}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            {/* <Avatar alt="Lenovo" src="/static/images/avatar/1.jpg" /> */}
            <Avatar alt="Lenovo" src={lenovo} />
          </ListItemAvatar>
          <ListItemText
            primary="Lenovo Laptops"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  Value for money
                </Typography>
                {" the best prices laptops in the market..."}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>

      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        subheader={<ListSubheader>Settings</ListSubheader>}
      >
        <ListItem> 
          <ListItemIcon>
            <WifiIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
          <Switch
            edge="end"
            onChange={handleToggle("wifi")}
            checked={checked.includes("wifi")}
            inputProps={{
              "aria-labelledby": "switch-list-label-wifi",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BluetoothIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
          <Switch
            edge="end"
            onChange={handleToggle("bluetooth")}
            checked={checked.includes("bluetooth")}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
      </List>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default DataDisplay;
