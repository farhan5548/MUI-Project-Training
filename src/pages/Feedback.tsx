import * as React from "react";
import type { SnackbarOrigin } from "@mui/material";
import { Alert, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

interface State extends SnackbarOrigin {
  open: boolean;
}

function Feedback() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClick({ vertical: "top", horizontal: "center" })}
        >
          Top-Center
        </Button>
      </Box>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid size={6}>
          <Button
            onClick={handleClick({ vertical: "top", horizontal: "left" })}
          >
            Top-Left
          </Button>
        </Grid>
        <Grid sx={{ textAlign: "right" }} size={6}>
          <Button
            onClick={handleClick({ vertical: "top", horizontal: "right" })}
          >
            Top-Right
          </Button>
        </Grid>
        <Grid size={6}>
          <Button
            onClick={handleClick({ vertical: "bottom", horizontal: "left" })}
          >
            Bottom-Left
          </Button>
        </Grid>
        <Grid sx={{ textAlign: "right" }} size={6}>
          <Button
            onClick={handleClick({ vertical: "bottom", horizontal: "right" })}
          >
            Bottom-Right
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClick({ vertical: "bottom", horizontal: "center" })}
        >
          Bottom-Center
        </Button>
      </Box>
    </React.Fragment>
  );
  return (
    <div>
      <Typography variant="h2" color="initial">
        Now we styudy about Feedback components
      </Typography>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="filled" severity="success">
          This is a filled success Alert.
        </Alert>
        <Alert variant="filled" severity="info">
          This is a filled info Alert.
        </Alert>
        <Alert variant="filled" severity="warning">
          This is a filled warning Alert.
        </Alert>
        <Alert variant="filled" severity="error">
          This is a filled error Alert.
        </Alert>
      </Stack>

      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="outlined" severity="success">
          This is a filled success Alert.
        </Alert>
        <Alert variant="outlined" severity="info">
          This is a filled info Alert.
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is a filled warning Alert.
        </Alert>
        <Alert variant="outlined" severity="error">
          This is a filled error Alert.
        </Alert>
      </Stack>

      <Box sx={{ width: 500 }}>
        {buttons}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="I love snacks"
          key={vertical + horizontal}
        />
      </Box>
    </div>
  );
}

export default Feedback;