import "../CSS/Home.css";
import HomeCard from "../Components/HomeCard";
import React from "react";
import { Container, Grid } from "@mui/material";


const Home = () => {
  return (
    <Container sx={{ marginTop: '30px'}} className='home-container'>

     
        
        <Grid xs={12} md={8} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div className='Header'>
          <h2>A Comparative Study and Application of YOLOv5 and Segment Anything Model (SAM) with CLIP</h2>
        </div>
        </Grid>
      
      
        
    <HomeCard/>
   
    </Container>
  )
}

export default Home