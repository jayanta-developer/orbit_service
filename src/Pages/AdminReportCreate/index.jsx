import React, { useState } from 'react'
import "./style.css"
import { Typography, Box } from '@mui/material'
import { useNavigate } from "react-router-dom"

//images
import backArrow from '../../Assets/Images/backArrow.png';
import Clog from "../../Assets/Images/ClogB.png";
import callIcon from "../../Assets/Images/phoneIcon.png";
import addIcon from "../../Assets/Images/addIcon.png"
import redCrossIcon from "../../Assets/Images/redCressIcon.png"

//components
import { DropBox, GoTop } from "../../Components/Tools"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { OrangeBtn, RedBtn, GreenBtn } from "../../Components/AppButton"
import AddEngineerPop from "../../Components/AddEngineerPop";


export default function AdminReportCreate() {
  const Navigate = useNavigate()
  const [clientNameDrop, setClientNameDrop] = useState(false)
  const [clientNameDropVal, setClientNameDropVal] = useState("National Council Of Science Museums")

  const [serviceDrop, setServiceDrop] = useState(false);
  const [serviceDropVal, setServiceDropVal] = useState("Maintenance");
  const [addEngPop, setAddEngPop] = useState(false)

  const serviceList = [
    "Maintenance 1",
    "Maintenance 1",
    "Maintenance 1"
  ]

  const clientNames = [
    "Organization Name 1",
    "Organization Name 2",
    "Organization Name 3",

  ]

  const EnCard = ({ img, name, phone }) => {
    return (
      <Box className="engCard">
        <Box className="enAvatarBox">
          <img src={img} />
        </Box>
        <Box className="enNameBox">
          <Typography>{name}</Typography>
          <spaa>{phone}</spaa>
        </Box>
        <img className='redCross' src={redCrossIcon} />
      </Box>
    )
  }
  const handleAddEngPopClick = () => {
    GoTop()
    setAddEngPop(true)
    setTimeout(() => {
      document.body.style.overflow = 'hidden';
    }, 500)
  }


  return (
    <>
      <Box className="AdminApContainer ADcreateReportPage">
        <AddEngineerPop addEngPop={addEngPop} setAddEngPop={setAddEngPop} />
        <Box className="navBackBar">
          <img src={backArrow} onClick={() => Navigate("/admin/list-view")} />
          <Typography>Service Report</Typography>
        </Box>
        <Box className="MobileNavBackBar">
          <img className='MClogo' src={Clog} />
          <Box className="serviceLabel">
            <Typography>Service Report</Typography>
          </Box>
        </Box>

        <Box className="boxSection">
          <Box className="boxItemSection f1Box aClogBox">
            <img src={Clog} />
          </Box>
          <Box className="boxItemSection f1Box coInformation">
            <Typography className='clogHeader'><span>Orbit</span> Animate Pvt. Ltd.</Typography>
            <Typography className='clogAddressText'>Planetarium Divison India (Carl Ceiss AG) BG 127, Sector-II Saltlake, Kolkata: 70091</Typography>
            <Box>
              <img src={callIcon} />
              <Typography>Tel: +91-33-40083725</Typography>
            </Box>
          </Box>
        </Box>

        <Box className="boxSection">
          <Box sx={{ background: "#F6F6F6" }} className="f2Box fBoxLeftPadding">
            <Box className="inputBoxWLabel inputWlMargin">
              <Typography className='inpBWLabelText'>Organization Name:</Typography>
              <Box width={"65%"}>
                <DropBox drop={clientNameDrop} setDrop={setClientNameDrop} dropVal={clientNameDropVal} setDropVal={setClientNameDropVal} dropItem={clientNames} />
              </Box>
            </Box>

            <Box className="inputBoxWLabel inputWlMargin">
              <Typography className='inpBWLabelText'>Type Of Instruments:</Typography>
              <Box className="textareaInput width65D">
                <textarea type="text" placeholder='9 Channel Powerdome Nova + Starmaster SB Hybrid Planetarium' />
              </Box>
            </Box>

            <Box className="inputBoxWLabel inputWlMargin">
              <Typography className='inpBWLabelText'>Address:</Typography>
              <Box className="textareaInput width65D">
                <textarea type="text" placeholder='KSSTM, Vikas Bhavan PO. Trivandrum. Kolkata 700089' />
              </Box>
            </Box>
          </Box>

          <Box className="f2Box fBoxRightPadding topP">
            <Box className="dateInputRowBox">
              <Box className="inputBoxWLabel">
                <Typography className='inpBWLabelText'>Start Date:</Typography>
                <Box width={"65%"} className="datePickerBox">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </Box>
              </Box>

              <Box className="inputBoxWLabel">
                <Typography className='inpBWLabelText'>End Date:</Typography>
                <Box width={"65%"} className="datePickerBox">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </Box>
              </Box>

            </Box>

            <Box className="inputBoxWLabel">
              <Typography className='inpBWLabelText'>Type Of Service:</Typography>
              <Box width={"65%"}>
                <DropBox drop={serviceDrop} setDrop={setServiceDrop} dropVal={serviceDropVal} setDropVal={setServiceDropVal} dropItem={serviceList} />
              </Box>
            </Box>

            <Box className="addEngWbtn">
              <Typography className='engLabel'>Service Engineers</Typography>
              <Box className="AddEngBtn" onClick={handleAddEngPopClick}>
                <img src={addIcon} />
                <Typography>Add Engineers</Typography>
              </Box>
            </Box>

            <Box className="engCardBox">
              {/* {EnCard({ name: "Sabyasachi Mukharjee", phone: "+91 1234578956", img: enUser1 })}
              {EnCard({ name: "Satyajeet Ganguly", phone: "+91 1234578956", img: enUser2 })} */}
            </Box>

            <Box className="addEngWbtn">
              <Typography className='engLabel'>Others Engineers</Typography>
            </Box>

            <Box className="otEnSaveInputBox searchBox">
              <input type="text" placeholder='Engineers Name 1' />
              <OrangeBtn btnText="Save" width="80px" />
            </Box>

            <Box className="enCardBox">
              {/* <Box className="enWICard">
                <Typography>Engineers Name 1</Typography>
                <img className='redCross' src={redCrossIcon} />
              </Box>
              <Box className="enWICard">
                <Typography>Engineers Name 2</Typography>
                <img className='redCross' src={redCrossIcon} />
              </Box> */}
            </Box>
          </Box>
        </Box>

        <Box className="boxSection f3MainBox">
          <Box className="f2Box">
            <Box className="f3Nav fBoxLeftPadding">
              <Typography>Activity & Observations:</Typography>
            </Box>

            <Box className="BtextAreaBox paddingOnlyLeft55">
              <Box height={"95%"} className="textareaInput width96D" >
                <textarea type="text" placeholder='Type Activity & Observations Here' />
              </Box>
            </Box>
          </Box>


          <Box sx={{ background: '#F6F6F6' }} className="f2Box">
            <Box sx={{ background: "#DADADA", paddingLeft: "30px" }} className="f3Nav">
              <Typography>Spare Parts Used:</Typography>
            </Box>
            <Box className="BtextAreaBox paddingOnlyLeft30 pr">
              <Box height={"95%"} className="textareaInput width96D" >
                <textarea style={{ background: "#fff" }} type="text" placeholder='Type Spare Parts Here' />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="boxSection remarkInputBox textAreyaWLabelBox">
          <Typography className='v2TextArLabel'>Remarks, Information, Further Measure Necessary</Typography>
          <Box width={"100%"} height={"220px"} className="textareaInput">
            <textarea type="text" placeholder='9 Channel Powerdome Nova + Starmaster SB Hybrid Planetarium' />
            <Typography className='textCountText'>0/200</Typography>
          </Box>

        </Box>

        <Box className="f4MainBox">
          <Typography className='v2TextArLabel'>Confirmation of Proper Execution of maintenance, end of service work, complete and satisfactory functioning of the Instrument.</Typography>

          <Box className="signatureMainBox">
            <Box className="signatureInnerBox"><Typography className='v2TextArLabel'>Place & Date</Typography></Box>
            <Box className="signatureInnerBox"><Typography className='v2TextArLabel'>Signature Of Customer</Typography></Box>
            <Box className="signatureInnerBox"><Typography className='v2TextArLabel'>Signature Of Service Engineer</Typography></Box>
          </Box>

          <Box className="buttonBox">
            <RedBtn btnText="Cancel" /> <GreenBtn btnText="Approve" />
          </Box>
        </Box>


      </Box >
    </>
  )
}
