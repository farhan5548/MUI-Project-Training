import { Box, Card, CardContent, Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { deepOrange, deepPurple } from "@mui/material/colors";
import black_lambo from "../assets/black_lambo.jpg";
import jeep from "../assets/jeep.jpg";
import Goku from "../assets/Goku.jpg";
import red_goku from "../assets/red_goku.png";
import GTR from "../assets/GTR.jpg";

function DataDisplay() {
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

      // List
      

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
    </div>
  );
}

export default DataDisplay;
