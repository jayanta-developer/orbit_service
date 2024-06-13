//image
import searchIcon from "../../Assets/Images/searchIcon.png"
import dropIcon from "../../Assets/Images/dropIcon.png"

import { Box, Typography } from '@mui/material';
import "./style.css"


export const SearchBar = ({ placeholder }) => {
  return (
    <Box className="searchBox">
      <input placeholder={placeholder} type="text" />
      <img src={searchIcon} />
    </Box>
  )
}


export const DropBox = ({ dropItem, drop, setDrop, dropVal, setDropVal }) => {
  return (
    <Box onClick={() => setDrop(!drop)} className="dropBox">
      <Typography >{dropVal}</Typography>
      <img className="dropIcon" src={dropIcon} style={{ rotate: drop ? "180deg" : "0deg" }} />
      <Box className="dropItemBox" sx={{ display: drop ? "flex" : "none" }}>
        {
          dropItem?.map((el, i) => (
            <Box key={i} className="dropItem" onClick={() => setDropVal(el)}>
              <Typography>{el}</Typography>
            </Box>
          ))
        }
      </Box>


    </Box>
  )
}

export const GoTop = () => {
  return window.scrollTo({ top: "0", behavior: "smooth" });
};