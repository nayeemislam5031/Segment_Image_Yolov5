import React from 'react'
import '../CSS/Footer.css'
import { Button, Grid } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  return (
    <Grid
    container
    rowSpacing={1}
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    sx={{ width: '100%' }} className='footer'>

      <Grid xs={6} sx={{
        textAlign:'start',
        color: 'whitesmoke',
        paddingLeft: '10%'
        
        }} className='infro-footer'>
      
        <p className='foot-title'>Jiangnan University Bachelor Thesis</p>
        <p>Computer Science and Technology</p>
        <p>
        1800 Lihu Blvd, BinHu Qu, Wu Xi Shi, Jiang Su Sheng, China, 214126
        </p>
      </Grid>
      <Grid xs={6} sx={{
        color:'whitesmoke'
      }} className='links'>

        <Button src=" " sx={{color:'whitesmoke', height:'30px'}}> <GitHubIcon/></Button>
        <Button src=" " sx={{color:'whitesmoke', height:'30px'}}> <LinkedInIcon/></Button>
        <Button href = "mailto: nayeemisilam5031@gmail.com" target="_blank" sx={{color:'whitesmoke', height:'30px'}}> <EmailIcon/> </Button>
      </Grid>
    </Grid>
  )
}

export default Footer