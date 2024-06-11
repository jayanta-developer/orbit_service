import "./style.css";

//component
import { Box, Typography } from '@mui/material';


export const OrangeBtn = ({ width, btnText }) => {
  return (
    <>
      <Box sx={{ width: width || "140px" }} className="appBtn">
        <Typography>{btnText}</Typography>
      </Box >
    </>
  )
}


export const GreenBtn = ({ width, btnText }) => {
  return (
    <>
      <Box sx={{ width: width || "140px" }} className="appBtn GreenBtn">
        <Typography>{btnText}</Typography>
      </Box >
    </>
  )
}