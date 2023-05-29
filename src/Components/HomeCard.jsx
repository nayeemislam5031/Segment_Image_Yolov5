import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../CSS/HomeCard.css';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const HomeCard = () => {
    const handleAlrtButton =()=>{
        
        // alert('Are your Sure you Want to do this??');
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    }
  return (
    <Box sx={{ flexGrow: 1 }}  >
        
    <Grid container rowSpacing={1} className='' columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={6}  display="flex" flex-direction='colum' justifyContent="end" alignItems="center">
      <div class="flip-card" >
                <div class="flip-card-inner">
                    <div class="flip-card-front front1">
                    <h2 className='tit'>Image Segmentation</h2>
                    </div>
                    <div class="flip-card-back back1">
                    <Button onClick={handleAlrtButton} className='Card-button' href='/Segment'> Segment Your Image</Button>
                    </div>
                </div>
        </div>
      </Grid>
      <Grid spacing={2} item xs={12} md={6}  display="flex" justifyContent="start" alignItems="center">
      <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front front2">
                    <h2 className='tit'>YOLO 5</h2>
                    </div>
                    <div class="flip-card-back back2">
                    <Button onClick={handleAlrtButton} className='Card-button' href='/YOLO5'> Detect Your Object</Button>
                    </div>
                </div>
            </div>
      </Grid>
      <Grid item xs={12} md={6}  display="flex" justifyContent="end" alignItems="center">
      <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front front3">
                    <h2 className='tit'>Documentation</h2>
                    </div>
                    <div class="flip-card-back back3">
                    <Button onClick={handleAlrtButton} className='Card-button' href='/Documentarion'>Quick Start</Button>
                    </div>
                </div>
            </div>
      </Grid>
      <Grid item xs={12} md={6}  display="flex" justifyContent="start" alignItems="center">
        
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front front4">
                    <h2 className='tit'>Nayeem Miah</h2>
                    <p>5035190131</p>
                    <p>Profesor Min Jiang</p>
                    </div>
                    <div class="flip-card-back back4">
                    <header xs paddingLeft='10px'>Jiangnan University</header> 
                    <p>Computer Science and Technology</p> 
                    <Button onClick={handleAlrtButton} className='Card-button' href='/Contact'>Contact</Button>
                    </div>
                </div>
            </div>
       
      </Grid>
      
    </Grid>
  </Box>
  )
}

export default HomeCard