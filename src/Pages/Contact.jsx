import { Box,Grid,Button,TextField,FormControl,InputLabel,Input,InputAdornment } from '@mui/material'
import React from 'react'
import '../CSS/Contact.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className='contact-container'>
      <div className=' title'> Contact Us </div>
      <Grid spacing={2} container >
        <Grid xs={12} md={6} centered display="flex" flexDirection='column' justifyContent="center" paddingLeft='20%' sx={{color:'whitesmoke', textAlign: 'start', height:'300px'}}>
          <div>
          <h5>Email:</h5>
          <p>nayeemsilam5031@ gmail.com</p>
          <h5>Phone:</h5>
          <p>+86 18651513391</p>
          <h5>Wechat:</h5>
          <p>Nayeem5031</p>
          </div>
          <div sx={{
            color:'whitesmoke'
            }} className='links'>

            <Button src=" " sx={{color:'whitesmoke', height:'30px'}}> <GitHubIcon/></Button>
            <Button src=" " sx={{color:'whitesmoke', height:'30px'}}> <LinkedInIcon/></Button>
            <Button href = "mailto: nayeemisilam5031@gmail.com" target="_blank" sx={{color:'whitesmoke', height:'30px'}}> <AlternateEmailSharpIcon/> </Button>
          </div>
        </Grid>
        <Grid xs={12} md={6} className='fromcontroler'>
          <Box
            className='form'
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
              width:'80%'
            }}
          >
            <div className='first-div'>
            <TextField id="First-naem" label="First Name" variant="standard" />
            <TextField id="Last-name" label="Last Name" variant="standard" />
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="Email">Email</InputLabel>
                <Input
                  id="Email"
                  variant="standard"
                  type='string'
                />
              </FormControl>
            </div>
            <div >
              <FormControl fullWidth sx={{m: 1, width:'90%'}}>
                <InputLabel htmlFor="Coments">Coments</InputLabel>
                <Input
                  id="Coments"
                  variant="standard"
                  type='string'
                />
              </FormControl>
            </div>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'end', paddingRight:'10%'}}>
            <Button sx={{color:'black', height:'30px', marginBottom:'30px', marginTop:'10px', right:'0'}} endIcon={<SendIcon />}>
              Send
            </Button>
            </div>
          </Box>

        </Grid>
      </Grid>
      

    </Box>
  )
}

export default Contact