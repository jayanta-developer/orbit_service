import React, { useState } from 'react';
import "./style.css";

import cLogo from "../../Assets/Images/coLogo.png"
import financeIcon from "../../Assets/Images/finance-bar 1.png"
import engineersIcon from "../../Assets/Images/engineersIcon.png"
import dropIcon from "../../Assets/Images/dropIcon.png"
import blackDot from "../../Assets/Images/blackDot.png"
import orangeDot from "../../Assets/Images/orangeDot.png"
import haumIcon from "../../Assets/Images/huamIcon.png"


//component
import { Box, Typography } from '@mui/material';

export default function UserListView() {
  const [sideDropItem, setSideDropItem] = useState(true);
  const [sideDropItem2, setSideDropItem2] = useState(true);

  const serviceReportList = [
    "All Reports",
    "Create Report",
    "Approved Reports",
    "Canceled Reports",
  ]
  const engineersList = [
    "All Engineers"

  ]



  return (
    <>
      <Box className="listContainer userListBox">
        <Box className="sideMenu">
          <img className='mainClogo' src={cLogo} />


          {/* Service Repor */}
          <Box className="sideMenuDropBox" onClick={() => setSideDropItem(!sideDropItem)}>
            <img src={financeIcon} />
            <Typography>Service Report</Typography>
            <img src={dropIcon} className='dropIcon' style={{ rotate: sideDropItem ? "180deg" : "0deg" }} />
          </Box>
          <Box sx={{ height: sideDropItem ? '171px' : '0px' }} className={sideDropItem ? "sideMenuItemBox sideMenuItemBoxPad" : "sideMenuItemBox"}>
            {serviceReportList?.map((el, i) => (
              <Box className="sideMenuSubItem">
                <img src={blackDot} />
                <Typography className='subMenuText'>{el}</Typography>
              </Box>
            ))}
          </Box>

          {/* Engineers */}
          <Box mt={2} className="sideMenuDropBox" onClick={() => setSideDropItem2(!sideDropItem2)}>
            <img src={financeIcon} />
            <Typography>Service Report</Typography>
            <img src={dropIcon} className='dropIcon' style={{ rotate: sideDropItem2 ? "180deg" : "0deg" }} />
          </Box>
          <Box sx={{ height: sideDropItem2 ? '171px' : '0px' }} className={sideDropItem2 ? "sideMenuItemBox sideMenuItemBoxPad" : "sideMenuItemBox"}>
            {engineersList?.map((el, i) => (
              <Box className="sideMenuSubItem">
                <img src={blackDot} />
                <Typography className='subMenuText'>{el}</Typography>
              </Box>
            ))}
          </Box>

          <Box className="colseMenuTabe">
            <img src={haumIcon} />
            <Typography>Close Menu</Typography>
          </Box>






        </Box>
        <Box className="mainBox">

        </Box>
      </Box>
    </>
  )
}
