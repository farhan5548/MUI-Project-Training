import { Box } from "@mui/material"
import lambo from '../assets/lambo.jpg'
function ImageSample() {
  return (
    <Box>
        <Box 
        component="img"
        src={lambo}
        alt="image"
        sx={{width: 300, borderRadius: 2 }}/>
    </Box>
    )
}

export default ImageSample