import React from 'react'
import "./style.css"


import { Typography, Box } from '@mui/material';
import { SearchBar } from "../Tools";
import redCrossIcon from "../../Assets/Images/redCressIcon.png"

//data
import { engineersData } from "../../Assets/Data"


export default function AddEngineerPop({ addEngPop, setAddEngPop }) {
  return (
    <>
      <Box className="grayBg" sx={{ display: addEngPop ? "flex" : "none" }}>
        <Box className="addEngPop">
          <img className='redCross' src={redCrossIcon} onClick={() => {
            setAddEngPop(false)
            document.body.style.overflow = ''
          }
          } />
          <Box className="PopSearchBox">
            <SearchBar placeholder="Search Engineer Name" />
          </Box>
          <Box className="enListBox">
            {
              engineersData?.map((el, i) => (
                <Box key={i} className="enListRow">
                  <Box className="enAvatarBox">
                    <img src={el?.img} />
                  </Box>
                  <Box className="enNameBox">
                    <Typography>{el?.name}</Typography>
                    <spaa>{el?.phone}</spaa>
                  </Box>
                  <Box className="check"><input type="checkBox" /></Box>
                </Box>
              ))
            }
          </Box>
        </Box>
      </Box>
    </>
  )
}
