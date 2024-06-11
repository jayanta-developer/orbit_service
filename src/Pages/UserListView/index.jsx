import React, { useState, useEffect } from 'react';
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
import editIcon from "../../Assets/Images/icons8-edit-64.png"
import logOutIcon from "../../Assets/Images/logout-24.png"


//component
import { Box, Typography } from '@mui/material';
import { SearchBar, DropBox } from "../../Components/Tools";

//data
import { ReportsApproved, ReportsPending, ReportsDecline } from "../../Assets/Data"

export default function UserListView() {
  const [sideDropItem, setSideDropItem] = useState(true);
  const [sideDropItem2, setSideDropItem2] = useState(true);
  const [shortDrop, setShortDrop] = useState(false)
  const [shortDropVal, setShortDropVal] = useState("Shorted By Date - New");
  const [currentPage, setCurrentPage] = useState(0);
  const [newArrayData, setNewArrayData] = useState([]);
  const [profileDrop, setProfileDrop] = useState(false)
  const [selectedTab, setSelectedTab] = useState("All Reports")

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

  const combinedArray = ReportsApproved.concat(ReportsPending, ReportsDecline);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const finalArray = selectedTab === "All Reports" ? shuffle(combinedArray) : selectedTab === "Approved Reports" ? ReportsApproved : selectedTab === "Canceled Reports" ? ReportsDecline : selectedTab === "Create Report" ? ReportsPending : [];


  useEffect(() => {
    printItemsByState(finalArray, currentPage);
  }, [currentPage, selectedTab]);

  function printItemsByState(array, page) {
    const startIndex = page * 6;
    const endIndex = (page + 1) * 6;
    const itemsToPrint = array.slice(startIndex, endIndex);
    setNewArrayData(itemsToPrint);
  }

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
  };

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
              <Box onClick={() => setSelectedTab(el)} key={i} className="sideMenuSubItem">
                <img src={selectedTab === el ? orangeDot : blackDot} />
                <Typography className={selectedTab === el ? 'subMenuText subMenuTextActive' : "subMenuText"}>{el}</Typography>
              </Box>
            ))}
          </Box>

          {/* Engineers */}
          <Box mt={2} className="sideMenuDropBox" onClick={() => setSideDropItem2(!sideDropItem2)}>
            <img src={engineersIcon} />
            <Typography>Engineers</Typography>
            <img src={dropIcon} className='dropIcon' style={{ rotate: sideDropItem2 ? "180deg" : "0deg" }} />
          </Box>
          <Box sx={{ height: sideDropItem2 ? '171px' : '0px' }} className={sideDropItem2 ? "sideMenuItemBox sideMenuItemBoxPad" : "sideMenuItemBox"}>
            {engineersList?.map((el, i) => (
              <Box onClick={() => setSelectedTab(el)} key={i} className="sideMenuSubItem">
                <img src={selectedTab === el ? orangeDot : blackDot} />
                <Typography className={selectedTab === el ? 'subMenuText subMenuTextActive' : "subMenuText"}>{el}</Typography>
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
                <Typography sx={{ cursor: "pointer" }} onClick={() => setProfileDrop(!profileDrop)}>User name</Typography>
                <img onClick={() => setProfileDrop(!profileDrop)} src={dropIcon} style={{ rotate: profileDrop ? "180deg" : "0deg" }} />
                <Box className="dropItemBox avaratDropBox" sx={{ display: profileDrop ? "flex" : "none" }}>

                  <Box onClick={() => setProfileDrop(false)} className="dropItem">
                    <img src={editIcon} />
                    <Typography ml={1}>Edit Profile</Typography>
                  </Box>

                  <Box onClick={() => setProfileDrop(false)} className="dropItem">
                    <img src={logOutIcon} />
                    <Typography ml={1}>logout</Typography>
                  </Box>

                </Box>
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
              newArrayData?.map((el, index) => (
                <Box key={index} className="TabelRow" minWidth={"1100px"}>

                  <Box minWidth={"13%"} className="Tabelsel tabelFChechBox">
                    <input type="checkBox" />
                    <Typography>{el?.data}</Typography>
                  </Box>
                  <Box minWidth={"13%"} className="Tabelsel Tabelcentersel">
                    <Typography>{el?.report}</Typography>
                  </Box>
                  <Box minWidth={"21%"} className="Tabelsel Tabelcentersel">
                    <Typography>{el?.ClientName}</Typography>
                  </Box>
                  <Box minWidth={"13%"} className="Tabelsel Tabelcentersel">
                    <Typography>{el?.ServiceType}</Typography>
                  </Box>
                  <Box minWidth={"13%"} className="Tabelsel Tabelcentersel">
                    {
                      el?.Status === "Approved" ?
                        <Typography sx={{ color: "#1D8803" }}>Approved</Typography> :
                        el?.Status === "Pending" ?
                          <Typography sx={{ color: "#F08A0A" }}>Pending</Typography> :
                          el?.Status === "Decline" ?
                            <Typography sx={{ color: "#E11F1F" }}>Decline</Typography> : null
                    }
                  </Box>
                  <Box minWidth={"13%"} className="Tabelsel Tabelcentersel tabelFChechBox">
                    <img src={el?.Status === "Approved" ? GPDF : BPDF} />
                    <Typography>{el?.Report}</Typography>
                  </Box>
                  <Box minWidth={"12%"} className="Tabelsel Tabelcentersel viewBox">
                    <img src={eyeIcon} />
                    <Typography>{el?.Action}</Typography>
                  </Box>

                </Box>
              ))}
          </Box>


          <Box className="pagenation">
            <Box mr={1} onClick={handlePrev} className="tabelBtn">
              <img style={{ rotate: "90deg" }} src={dropIcon} />
            </Box>

            <Box className="pageNumberBox">
              <Box
                onClick={() => setCurrentPage(0)}
                className={
                  currentPage === 0 ? "pageNumber pageNumberActive" : "pageNumber"
                }
              >
                <p>1</p>
              </Box>
              <Box
                onClick={() => setCurrentPage(1)}
                className={
                  currentPage === 1 ? "pageNumber pageNumberActive" : "pageNumber"
                }
              >
                <p>2</p>
              </Box>
              <Box
                onClick={() => setCurrentPage(2)}
                className={
                  currentPage === 2 ? "pageNumber pageNumberActive" : "pageNumber"
                }
              >
                <p>3</p>
              </Box>
              <Box
                onClick={() => setCurrentPage(3)}
                className={
                  currentPage === 3 ? "pageNumber pageNumberActive" : "pageNumber"
                }
              >
                <p>4</p>
              </Box>
              <Box
                onClick={() => setCurrentPage(4)}
                className={
                  currentPage === 4 ? "pageNumber pageNumberActive" : "pageNumber"
                }
              >
                <p>5</p>
              </Box>
            </Box>

            <Box ml={1} onClick={handleNext} className="tabelBtn">
              <img style={{ rotate: "270deg" }} src={dropIcon} />
            </Box>
          </Box>

        </Box>
      </Box>
    </>
  )
}
