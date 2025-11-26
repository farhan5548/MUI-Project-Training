import {
  Autocomplete,
  TextField,
  Box,
  Button,
  Typography,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function Input() {
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
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to MUI
        </Typography>
        <Button
          variant="contained"
          color="primary"
          target="_blank"
          href="https://mui.com/material-ui/all-components/"
          rel="noopener noreferrer"
        >
          Click Me
        </Button>
      </Box>

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
          target="_blank"
          rel="noopener noreferrer"
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
    </div>
  );
}
export default Input;
