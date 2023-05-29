import React from 'react'
import  '../CSS/Doc.css'
import { Box, Grid } from '@mui/material'

const Documentation = () => {
  return (
    <Box className='container' >
      <Grid  className='SAM' >
        <div style={{color:'whitesmoke'}}>
          <h3 style={{margin:'0', paddingTop:'35px'}}>Segment Anything With Clip</h3>
          <p style={{fontSize:'15px'}}>Meta released a new foundation model for segmentation tasks. It aims to resolve downstream segmentation tasks with prompt engineering, such as foreground/background points, bounding box, mask, and free-formed text. However, the text prompt is not released yet.</p>
          <br />
          <h3 >How to run on local</h3>
          <p>make env</p>
          <p>conda activate segment-anything-with-clip</p>
          <p>make setup</p>
        </div>
        

        <div style={{color:'whitesmoke'}}>
          <h3> Referances</h3>
          <li ><a style={{color:'gray' , textDecoration:"none"}} href="https://github.com/facebookresearch/segment-anything"> Segment Anything</a></li>
          <li ><a style={{color:'gray' , textDecoration:"none"}} href="https://github.com/openai/CLIP"> Clip</a></li>
          
        </div>

      </Grid>

      <Grid className='YOLO' style={{marginTop:'30px', paddingBottom:'30px'}}>
        <div style={{color:'whitesmoke'}}>
          <h3>YOLOv5</h3>
          <p>OLOv5 is the world's most loved vision AI, representing Ultralytics open-source research into future vision AI methods, incorporating lessons learned and best practices evolved over thousands of hours of research and development.</p>
        </div>
        <br />

        <div style={{color:'whitesmoke'}}>
          <p>
            In this priject this model used to Detect Object from image and Video. 
          </p>

        </div>
        <br />
        <div style={{color:'whitesmoke'}}>
          <h3> Referances</h3>
          <li ><a style={{color:'gray', textDecoration:"none"}} href="https://github.com/ultralytics/yolov5"> YOLOv5 </a></li>
          <li ><a style={{color:'gray' , textDecoration:"none"}} href="hhttps://docs.ultralytics.com/yolov5/"> DOC</a></li>
          
        </div>
        

      </Grid>
    </Box>
  )
}

export default Documentation