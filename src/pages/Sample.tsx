// import lambo from "../assets/lambo.jpg";
import { Autocomplete, TextField, Box, Button, Grid } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function Sample() {
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    // <div
    //   style={{
    //     background: "skyblue",
    //     color: "black",
    //     padding: "20px",
    //     height: "100vh",
    //   }}
    // >
    // <div style={{ backgroundImage: `url(${lambo})`,
    //   height:"100vh",
    //   width:"100vw"
    //  }}>
    <div>
      <h1>This is the Page for Practice Material-UI</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "125px",
          width: "225px",
          border: "1px solid black",
          borderRadius: "8px",
          paddingX: "12px",
          paddingY: "10px",
          margin: "15px",
          bgcolor: "yellow",
        }}
      >
        <p
          style={{
            color: "blue",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          See the Portfolio
        </p>
        <Button
          href="https://personal-portfolio-responsive.netlify.app/"
          sx={{
            padding: "5px",
            color: "white",
            bgcolor: "black",
            border: "1px solid black",
          }}
          endIcon={<LaunchIcon />}
        >
          Click Me
        </Button>
      </Box>

      <Autocomplete
        options={options}
        renderInput={(params) => (
          <TextField {...params} label="Choose an option" variant="outlined" />
        )}
        sx={{ width: 300, backgroundColor: "white", borderRadius: "4px" }}
      />

      <FormControl>
        <FormLabel id="demo">Gender</FormLabel>
        <RadioGroup row aria-labelledby="demo" name="row-radio-buttons-group">
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="other"
          />
        </RadioGroup>
      </FormControl>

      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
      </Stack>

      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>

      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        This Box renders as an HTML section element.
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <p></p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Sample;
