import React, { useState } from 'react';
import "./style.css"

//image
import backgroundImg from "../../Assets/Images/backgroungImg.png";
import coLogo from "../../Assets/Images/coLogo.png";
import userIcon from "../../Assets/Images/userIcon.png"
import lockIcon from "../../Assets/Images/lockIcon.png"
import eyeIcon from "../../Assets/Images/eyeIcon.png"

//component
import { Box, Typography } from '@mui/material';
import { OrangeBtn } from "../../Components/AppButton"


export default function Auth() {
  const [logBox, setLogBox] = useState("admin");
  const [visiblePwd1, serVisiblePwd1] = useState(false)
  const [visiblePwd2, serVisiblePwd2] = useState(false)

  return (
    <>
      <Box className="authContainer">
        <img className='logBackg' src={backgroundImg} />
        <Box className="logForm">
          <img className='clogo' src={coLogo} />
          <Typography className='logText'>LOGIN</Typography>
          <Box className="logInnerFrom">
            <Box className="logNav">
              <Typography onClick={() => setLogBox("admin")} className={logBox === "admin" ? 'logNavText logNavTextActive' : 'logNavText'}>Admin</Typography>
              <Typography onClick={() => setLogBox("user")} className={logBox === "user" ? 'logNavText logNavTextActive' : 'logNavText'}>User</Typography>
            </Box>

            {logBox === "admin" ?
              //admin
              <Box className="logInput">
                <Box mb={2} className="inputBox">
                  <input type="text" placeholder='Enter Your User Name' />
                  <img className='inputIcon' src={userIcon} />
                </Box>

                <Box className="inputBox">
                  <input type={visiblePwd1 ? "text" : "password"} placeholder='Enter Password' />
                  <img className='inputIcon' src={lockIcon} />
                  <img onClick={() => serVisiblePwd1(!visiblePwd1)} className='eyeIcon' src={eyeIcon} />
                </Box>
                <Typography className='forgetText'>Forget Password?</Typography>

                <Box className="btnCenterWrapper">
                  <OrangeBtn width="140px" btnText="Login Now" />
                </Box>
              </Box> :

              // user
              <Box className="logInput">
                <Box mb={2} className="inputBox">
                  <input type="text" placeholder='Enter Your User Name' />
                  <img className='inputIcon' src={userIcon} />
                </Box>

                <Box className="inputBox">
                  <input type={visiblePwd2 ? "text" : "password"} placeholder='Enter Password' />
                  <img className='inputIcon' src={lockIcon} />
                  <img onClick={() => serVisiblePwd2(!visiblePwd2)} className='eyeIcon' src={eyeIcon} />
                </Box>
                <Typography className='forgetText'>Forget Password?</Typography>

                <Box className="btnCenterWrapper">
                  <OrangeBtn width="140px" btnText="Login Now" />
                </Box>
              </Box>
            }

          </Box>
        </Box>

      </Box>
    </>
  )
}
