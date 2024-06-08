import React, { useState } from 'react';
import "./style.css";

import cLogo from "../../Assets/Images/coLogo.png";
import financeIcon from "../../Assets/Images/finance-bar 1.png";
import engineersIcon from "../../Assets/Images/engineersIcon.png";
import dropIcon from "../../Assets/Images/dropIcon.png";
import blackDot from "../../Assets/Images/blackDot.png";
import orangeDot from "../../Assets/Images/orangeDot.png";
import haumIcon from "../../Assets/Images/huamIcon.png";
import calendarIcon from "../../Assets/Images/calendarIcon.png";
import notificationIcon from "../../Assets/Images/notificationsIcon.png";
import avatar from "../../Assets/Images/avatar.png"
import dArrow from "../../Assets/Images/dobelArrow.png"
import GPDF from "../../Assets/Images/greenPDF.png";
import BPDF from "../../Assets/Images/blackPDF.png";
import eyeIcon from "../../Assets/Images/blackEyeIcon.png";


//component
import { Box, Typography } from '@mui/material';
import { SearchBar, DropBox } from "../../Components/Tools";

//data
import { ReportsApproved } from "../../Assets/Data"

export default function UserListView() {
  const [sideDropItem, setSideDropItem] = useState(true);
  const [sideDropItem2, setSideDropItem2] = useState(true);
  const [shortDrop, setShortDrop] = useState(false)
  const [shortDropVal, setShortDropVal] = useState("Shorted By Date - New")

  const serviceReportList = [
    "All Reports",
    "Create Report",
    "Approved Reports",
    "Canceled Reports",
  ]
  const engineersList = [
    "All Engineers"
  ]
  const shortItems = [
    "Shorted By Date - New",
    "Shorted By Date - old",
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
            <img src={engineersIcon} />
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
          {/* Service Repor */}
          <Box className="sectionNav">
            <Box className="headerLabel">
              <Typography>Service Report</Typography>
            </Box>

            <Box className="navAvatarBox">
              <Box className='navCalBox'>
                <img src={calendarIcon} />
                <Typography>24 march 2021</Typography>
              </Box>

              <Box className="ballIcon">
                <img src={notificationIcon} />
                <Box className="notifCount">
                  <p>6</p>
                </Box>
              </Box>

              <Box className="avatarBox">
                <img src={avatar} />
                <Typography>User name</Typography>
                <img src={dropIcon} />
              </Box>
            </Box>

          </Box>

          <Box className="searchAndShotrBox">
            <Box width={"65%"}>
              <SearchBar placeholder="Search.." />
            </Box>
            <Box width={"35%"}>
              <DropBox dropItem={shortItems} drop={shortDrop} setDrop={setShortDrop} dropVal={shortDropVal} setDropVal={setShortDropVal} />
            </Box>
          </Box>

          <Box className="workListBox">
            <Box className="haderRow" minWidth={"1100px"}>
              <Box minWidth={"13%"} className="Tabelsel TabelStatesel TabelselItemStart tabelFChechBox">
                <Typography>Date</Typography>
                <img src={dArrow} />
              </Box>
              <Box minWidth={"13%"} className="Tabelsel TabelselItemStart">
                <Typography>Report #</Typography>
              </Box>
              <Box minWidth={"21%"} className="Tabelsel TabelselItemStart">
                <Typography>Client Name</Typography>
              </Box>
              <Box minWidth={"13%"} className="Tabelsel TabelselItemStart">
                <Typography>Service Type</Typography>
              </Box>
              <Box minWidth={"13%"} className="Tabelsel TabelselItemStart">
                <Typography>Status</Typography>
              </Box>
              <Box minWidth={"13%"} className="Tabelsel TabelselItemStart">
                <Typography>Report</Typography>
              </Box>
              <Box minWidth={"12%"} className="Tabelsel TabelselItemStart">
                <Typography>Action</Typography>
              </Box>
            </Box>
            {ReportsApproved &&
              ReportsApproved?.map((el, index) => (
                <Box key={index} className="TabelRow" minWidth={"1100px"}>

                  <Box minWidth={"13%"} className="Tabelsel tabelFChechBox">
                    <input type="checkBox" />
                    <Typography>{el.data}</Typography>
                  </Box>
                  <Box minWidth={"13%"} className="Tabelsel Tabelcentersel">
                    <Typography>{el.report}</Typography>
                  </Box>
                  <Box minWidth={"21%"} className="Tabelsel Tabelcentersel">
                    <Typography>{el.ClientName}</Typography>
                  </Box>
                  <Box minWidth={"13%"} className="Tabelsel Tabelcentersel">
                    <Typography>{el.ServiceType}</Typography>
                  </Box>
                  <Box minWidth={"13%"} className="Tabelsel Tabelcentersel">
                    {
                      el.Status === "Approved" ?
                        <Typography sx={{ color: "#1D8803" }}>Approved</Typography> :
                        el.Status === "Pending" ?
                          <Typography sx={{ color: "#F08A0A" }}>Pending</Typography> :
                          el.Status === "Decline" ?
                            <Typography sx={{ color: "#E11F1F" }}>Decline</Typography> : null
                    }
                  </Box>
                  <Box minWidth={"13%"} className="Tabelsel Tabelcentersel tabelFChechBox">
                    <img src={el.Status === "Approved" ? GPDF : BPDF} />
                    <Typography>{el.Report}</Typography>
                  </Box>
                  <Box minWidth={"12%"} className="Tabelsel Tabelcentersel viewBox">
                    <img src={eyeIcon} />
                    <Typography>{el.Action}</Typography>
                  </Box>

                </Box>
              ))}
          </Box>




        </Box>
      </Box>
    </>
  )
}
