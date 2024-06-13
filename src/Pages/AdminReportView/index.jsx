import React, { useState } from 'react'
import "./style.css"
import { Typography, Box } from '@mui/material'
import { useNavigate } from "react-router-dom"

//images
import backArrow from '../../Assets/Images/backArrow.png';
import Clog from "../../Assets/Images/ClogB.png";
import callIcon from "../../Assets/Images/phoneIcon.png";
import enUser1 from "../../Assets/Images/enUser1.png"
import enUser2 from "../../Assets/Images/enUser2.png"

//components
import { RedBtn, GreenBtn } from "../../Components/AppButton"


export default function AdminReportView() {
  const Navigate = useNavigate()

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
      </Box>
    )
  }


  return (
    <>
      <Box className="AdminApContainer ADReportViewPage">
        <Box className="navBackBar">
          <img src={backArrow} onClick={() => Navigate("/admin/list-view")} />
          <Typography>Service Report</Typography>
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

        <Box className="boxSection topSBotBorder">
          <Box sx={{ background: "#F6F6F6" }} className="f2Box fBoxLeftPadding fBox1TopPadding">

            <Box sx={{ marginTop: "0px" }} className="inputBoxWLabel inputWlMargin ">
              <Typography className='inpBWLabelText'>Client Name:</Typography>
              <Box width={"65%"}>
                <Typography className="reportClientVal">National</Typography>
              </Box>
            </Box>

            <Box className="inputBoxWLabel inputWlMargin">
              <Typography className='inpBWLabelText'>Order Date:</Typography>
              <Box width={"65%"} >
                <Typography className="reportClientVal">2014 Service Contact</Typography>
              </Box>
            </Box>
            <Box className="inputBoxWLabel inputWlMargin">
              <Typography className='inpBWLabelText'>Type Of Service:</Typography>
              <Box width={"65%"} >
                <Typography className="reportClientVal">Maintenance</Typography>
              </Box>
            </Box>

            <Box className="inputBoxWLabel inputWlMargin">
              <Typography className='inpBWLabelText'>Type Of Instruments:</Typography>
              <Box width={"65%"} >
                <Typography className="reportClientVal">9 Channel Powerdome Nova + Starmaster SB Hybrid Planetarium</Typography>
              </Box>
            </Box>

            <Box className="inputBoxWLabel inputWlMargin">
              <Typography className='inpBWLabelText'>Address:</Typography>
              <Box width={"65%"} >
                <Typography className="reportClientVal">KSSTM, Vikas Bhavan PO. Trivandrum. Kolkata 700089</Typography>
              </Box>
            </Box>
          </Box>

          <Box className="f2Box fBoxRightPadding topP">
            <Typography className='f2HeaderText'><span>Report No:</span> 2016 Service Contact Under Warrenty</Typography>

            <Box className="dateInputRowBox">
              <Box className="inputBoxWLabel">
                <Typography className='f2HeaderText'><span>Start Date:</span> 25/06/2021</Typography>
              </Box>

              <Box className="inputBoxWLabel">
                <Typography className='f2HeaderText'><span>End Date:</span> 11/07/2021</Typography>

              </Box>

            </Box>


            <Box className="addEngWbtn">
              <Typography className='engLabel'>Service Engineers</Typography>
            </Box>

            <Box className="engCardBox">
              {EnCard({ name: "Sabyasachi Mukharjee", phone: "+91 1234578956", img: enUser1 })}
              {EnCard({ name: "Satyajeet Ganguly", phone: "+91 1234578956", img: enUser2 })}
            </Box>

            <Box mt={4} className="addEngWbtn">
              <Typography className='engLabel'>Others Engineers</Typography>
            </Box>

            <Box className="enCardBox">
              <Box className="enWICard">
                <Typography>Engineers Name 1</Typography>
              </Box>
              <Box className="enWICard">
                <Typography>Engineers Name 2</Typography>
              </Box>
              <Box className="enWICard">
                <Typography>Engineers Name 3</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="boxSection f3MainBox">
          <Box className="f2Box">
            <Box className="f3Nav fBoxLeftPadding">
              <Typography>Activity & Observations:</Typography>
            </Box>

            <Box className="BtextAreaBox paddingOnlyLeft55 paddingR27 paddingB37px">
              <Typography color={"#4E4C54"} mb={2}>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia libero augue cum nunc lorem imperdiet aliquam. Vivamus feugiat quis enim ipsum elementum at lobortis tempus. Curabitur aliquam sed massa enim integer pellentesque metus, in. Vitae viverra duis cum a dolor.</Typography>
              <Typography color={"#4E4C54"} mb={2}>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia libero augue cum nunc lorem imperdiet aliquam. Vivamus feugiat quis enim ipsum elementum at lobortis tempus.</Typography>
              <Typography color={"#4E4C54"} mb={2}>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia libero augue cum nunc lorem imperdiet aliquam.</Typography>
              <Typography color={"#4E4C54"}>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia libero augue cum nunc lorem imperdiet aliquam.</Typography>
            </Box>
          </Box>


          <Box sx={{ background: '#F6F6F6' }} className="f2Box">
            <Box sx={{ background: "#DADADA", paddingLeft: "30px" }} className="f3Nav">
              <Typography>Spare Parts Used:</Typography>
            </Box>
            <Box className="BtextAreaBox paddingOnlyLeft30 pr">
              <Typography color={"#262528"} mb={3}>1. 1 TB Hard Disk 1 No.</Typography>
              <Typography color={"#262528"} mb={3}>2. ACM 1 Card 1 No.</Typography>
              <Typography color={"#262528"} mb={3}>3. Lorem Ipsum Is Simply Dummy Text.</Typography>
              <Typography color={"#262528"} mb={3}>4. Lacinia libero augue cum nunc lorem imperdiet aliquam.</Typography>
              <Typography color={"#262528"} mb={3}>5. Curabitur aliquam sed massa enim integer pellentesque metus</Typography>
              <Typography color={"#262528"}>6. 1 TB SSD Disk 2 No.</Typography>
            </Box>
          </Box>
        </Box>

        <Box className="boxSection remarkInputBox">
          <Typography className='v2TextArLabel'>Remarks, Information, Further Measure Necessary</Typography>
          <Typography color="#4E4C54" mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vivamus sagittis tellus sed cras. Vitae, vulputate integer auctor in tincidunt nisl, sagittis mauris diam. Sagittis, mattis adipiscing faucibus consectetur etiam sit cursus risus. Vitae at rhoncus magna non volutpat, enim. Tortor montes, felis justo maecenas elit eget urna. Lectus id bibendum pellentesque scelerisque neque. Id et elit, eu scelerisque placerat. Mauris, consequat, a porttitor in vulputate tempus tincidunt donec. Lacinia bibendum massa sed imperdiet diam in. Vulputate at pretium non gravida enim, congue viverra porttitor.</Typography>
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
