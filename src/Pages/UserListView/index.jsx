import React, { useState, useEffect } from 'react';
import "./style.css";

import cLogo from "../../Assets/Images/coLogo.png";
import SClogo from "../../Assets/Images/sClogo.png"
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
import { ReportsApproved, ReportsPending, ReportsDecline, bellDropItem } from "../../Assets/Data"

export default function UserListView() {
  const [sideDropItem, setSideDropItem] = useState(true);
  const [sideDropItem2, setSideDropItem2] = useState(true);
  const [shortDrop, setShortDrop] = useState(false)
  const [shortDropVal, setShortDropVal] = useState("Shorted By Date - New");
  const [currentPage, setCurrentPage] = useState(0);
  const [newArrayData, setNewArrayData] = useState([]);
  const [profileDrop, setProfileDrop] = useState(false)
  const [selectedTab, setSelectedTab] = useState("All Reports")
  const [bellDrop, setBellDrop] = useState(false)
  const [bellDropVal, setBellDropVal] = useState()
  const [sideMOpen, setSideMOpen] = useState(false)


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

  //print date
  const date = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-GB', options);

  useEffect(() => {
    printItemsByState(finalArray, currentPage);
  }, [currentPage, selectedTab]);

  function printItemsByState(array, page) {
    const startIndex = page * 8;
    const endIndex = (page + 1) * 8;
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
        <Box className="sideMenu" minWidth={sideMOpen ? "300px" : "60px"}>
          {
            sideMOpen ?
              <img className='mainClogo' src={cLogo} /> :
              <img className='SmainClogo' src={SClogo} style={{ width: "50px" }} />
          }


          {/* Service Repor */}
          <Box className="sideMenuDropBox" onClick={() => setSideDropItem(!sideDropItem)}>
            <img src={financeIcon} />
            <Typography sx={{ display: sideMOpen ? "block" : "none" }}>Service Report</Typography>
            <img src={dropIcon} className='dropIcon' style={{ rotate: sideDropItem ? "180deg" : "0deg", display: sideMOpen ? "block" : "none" }} />
          </Box>
          <Box sx={{ height: sideDropItem ? '171px' : '0px' }} className={sideDropItem ? "sideMenuItemBox sideMenuItemBoxPad" : "sideMenuItemBox"}>
            {serviceReportList?.map((el, i) => (
              <Box onClick={() => {
                setSelectedTab(el)
                setCurrentPage(0)
              }} key={i} className="sideMenuSubItem">
                <img src={selectedTab === el ? orangeDot : blackDot} />
                <Typography sx={{ display: sideMOpen ? "block" : "none" }} className={selectedTab === el ? 'subMenuText subMenuTextActive' : "subMenuText"}>{el}</Typography>
              </Box>
            ))}
          </Box>

          {/* Engineers */}
          <Box mt={2} className="sideMenuDropBox" onClick={() => setSideDropItem2(!sideDropItem2)}>
            <img src={engineersIcon} />
            <Typography sx={{ display: sideMOpen ? "block" : "none" }}>Engineers</Typography>
            <img src={dropIcon} className='dropIcon' style={{ rotate: sideDropItem2 ? "180deg" : "0deg", display: sideMOpen ? "block" : "none" }} />
          </Box>
          <Box sx={{ height: sideDropItem2 ? '171px' : '0px' }} className={sideDropItem2 ? "sideMenuItemBox sideMenuItemBoxPad" : "sideMenuItemBox"}>
            {engineersList?.map((el, i) => (
              <Box onClick={() => setSelectedTab(el)} key={i} className="sideMenuSubItem">
                <img src={selectedTab === el ? orangeDot : blackDot} />
                <Typography sx={{ display: sideMOpen ? "block" : "none" }} className={selectedTab === el ? 'subMenuText subMenuTextActive' : "subMenuText"}>{el}</Typography>
              </Box>
            ))}
          </Box>

          <Box onClick={() => setSideMOpen(!sideMOpen)} className={sideMOpen ? "colseMenuTabeActive" : "colseMenuTabeActive colseMenuTabe"} >
            <img src={haumIcon} />
            <Typography sx={{ display: sideMOpen ? "block" : "none" }}>Close Menu</Typography>
          </Box>
        </Box>

        <Box className="mainBox">
          {/* Service Repor */}
          <Box className="sectionNav">
            <Box className="headerLabel">
              <Typography>{selectedTab}</Typography>
            </Box>

            <Box className="navAvatarBox">
              <Box className='navCalBox'>
                <img src={calendarIcon} />
                <Typography>{formattedDate}</Typography>
              </Box>

              <Box className="bellIcon" onClick={() => setBellDrop(!bellDrop)}>
                <img src={notificationIcon} />
                <Box className="notifCount">
                  <p>6</p>
                </Box>
                <Box className="dropItemBox" sx={{ display: bellDrop ? "flex" : "none" }}>
                  {
                    bellDropItem?.map((el, i) => (
                      <Box key={i} className="dropItem" onClick={() => setBellDropVal(el)}>
                        <Typography>{el}</Typography>
                      </Box>
                    ))
                  }
                </Box>
              </Box>

              <Box className="avatar_Box">
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
            <Box className="listPageSearchBox" >
              <SearchBar placeholder="Search.." />
            </Box>
            <Box className="listPageDateDrop" >
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
        <Box minWidth={"9px"} sx={{ display: sideMOpen ? "block" : "none", transition: "all 0.5s" }}></Box>

      </Box>
    </>
  )
}
