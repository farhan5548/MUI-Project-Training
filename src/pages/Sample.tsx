import lambo from "../assets/lambo.jpg";
import { Autocomplete, TextField, Box, Button, Grid } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

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
        <Grid container spacing={3}>
          <Grid size={8}>
            <p
              style={{
                border: "2px solid black",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              this is not a box.
            </p>
          </Grid>
          <Grid size={4}>
            <p
              style={{
                border: "2px solid black",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              this is not a box.
            </p>
          </Grid>

          <Grid size={3}>
            <p
              style={{
                border: "2px solid black",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              this is not a box.
            </p>
          </Grid>

          <Grid size={3}>
            <p
              style={{
                border: "2px solid black",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              this is not a box.
            </p>
          </Grid>

          <Grid size={3}>
            <p
              style={{
                border: "2px solid black",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              this is not a box.
            </p>
          </Grid>

          <Grid size={3}>
            <p
              style={{
                border: "2px solid black",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              this is not a box.
            </p>
          </Grid>
        </Grid>
      </Box>

      <div style={{ backgroundImage: `url(${lambo})`, height: "135vh" }}>
        hi{" "}
      </div>

      <h1>Now Practice Stack row</h1>
      <Stack direction="row" spacing={2}>
        <p
          style={{
            border: "2px solid black",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          this is not a box.
        </p>
        <p
          style={{
            border: "2px solid black",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          this is not a box.
        </p>
        <p
          style={{
            border: "2px solid black",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          this is not a box.
        </p>
        <p
          style={{
            border: "2px solid black",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          this is not a box.
        </p>
      </Stack>

      <h1>Now Practice Stack column</h1>

      <Stack direction="column" spacing={2}>
        <p
          style={{
            border: "2px solid black",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          this is not a box.
        </p>
        <p
          style={{
            border: "2px solid black",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          this is not a box.
        </p>
        <p
          style={{
            border: "2px solid black",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          this is not a box.
        </p>
        <p
          style={{
            border: "2px solid black",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          this is not a box.
        </p>
      </Stack>

      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Sample;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];