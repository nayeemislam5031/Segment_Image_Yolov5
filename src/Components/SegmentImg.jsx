import React from 'react'
import '../CSS/SegmetnImage.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button,CardContent,CardMedia,Typography } from '@mui/material';
import Card from '@mui/material/Card';
import ButtonGroup from '@mui/material/ButtonGroup';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';
import {saveAs} from 'file-saver';


import  { useState } from 'react';
import FormData from 'form-data';
import { SaveAs } from '@mui/icons-material';

const SegmentImg = () => {

  const [floatValue1, setFloatValue1] = useState('');
  const [floatValue2, setFloatValue2] = useState('');
  const [floatValue3, setFloatValue3] = useState('');
  const [stringValue, setStringValue] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [segresultImage, setResultImage] = useState('');
  const [updisplayImg, setUpdisplayImg] = useState('')
  const [downloadImage, setdownloadImage] = useState('')


  const handleFloat1Change = (event) => {
    setFloatValue1(parseFloat(event.target.value));
    console.log(floatValue1);
  };

  const handleFloat2Change = (event) => {
    setFloatValue2(parseFloat(event.target.value));
    console.log(floatValue2);
  };

  const handleFloat3Change = (event) => {
    setFloatValue3(parseFloat(event.target.value));
    console.log(floatValue3);
  };

  const handleStringChange = (event) => {
    setStringValue(event.target.value);
    console.log(stringValue);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
    setUpdisplayImg(URL.createObjectURL(event.target.files[0]));
  };
  const handleClearImage = () => {
    setImageFile(null)
    setUpdisplayImg('')
    setResultImage('')
    document.getElementById('image-upload').value = null;
  };

  const handleImageDownload = () => {
    
    saveAs(`data:image/png;base64,${segresultImage}`,'output.png');
  };
  
  //submit function
  const handleSubmit = async (event) => {
    event.preventDefault();

    var formData = new FormData();
    formData.append("file", imageFile );
    
    var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };

    fetch(`http://land.zaisoft.io/segmentIMG?predicted_iou_threshold=${floatValue1}&stability_score_threshold=${floatValue2}&clip_threshold=${floatValue3}&query=${stringValue}`, requestOptions)
        .then(response => response.text())
        .then((result) => {
          console.log(result)
          setResultImage(result);
          setdownloadImage(`data:image/png;base64,${segresultImage}`)
          
          })
        .catch(error => console.log('error', error));
};

  return (
    <Box sx={{ flexGrow: 1 }} className='background_'>
      <Typography sx={{textAlign:'center', color:'whitesmoke'}} gutterBottom variant="h4" component="div">
              Segment Anything With (Clip)
      </Typography>
    <Grid container spacing={2} >
      <Grid item xs={12} md={5} sx={{marginBottom:'30px'}} className='background_ left-Side'>
        <Card className='card' >
          <CardContent >
            <p>Predicted Iou Threshold</p>
            <Slider
              size="small"
              aria-label="Small"
              step={0.01}
              marks
              min={0}
              max={1.00}
              valueLabelDisplay="auto"
              value={floatValue1}
              onChange={handleFloat1Change}
            />
            <p>Stability Score Threshold</p>
            <Slider
              size="small"
              aria-label="Small"
              defaultValue={0.5}
              step={0.01}
              marks
              min={0}
              max={1.00}
              valueLabelDisplay="auto"
              value={floatValue2}
              onChange={handleFloat2Change}
            />

            <p> Clip Threshold</p>
            <Slider
              size="small"
              aria-label="Small"
              defaultValue={0.5}
              step={0.01}
              marks
              min={0}
              max={1.00}
              valueLabelDisplay="auto"
              value={floatValue3}
              onChange={handleFloat3Change}
            />

            <TextField
              sx={{color:'whitesmoke'}}
              hiddenLabel
              id="filled-hidden-label-small"
              label="what you want to segment"
              variant="standard"
              size="small"
              value={stringValue}
              onChange={handleStringChange}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={7} spacing={1} className='background_ right-Side'>
        <Card className=' card input centerByCol'>
          {
            updisplayImg? (<CardMedia
              sx={{ height: 200, width: '100%' }}
              image=  {updisplayImg}
              title="Input Image"
              />):(<p sx={{ height: 200 }}>Input Image</p>)
          }
        </Card>
        <Card className=' card output centerByCol'>
          {
            segresultImage? ( <CardMedia
              sx={{ height: 200, width: '100%' }}
              component="img"
              height="194"
              
              image={`data:image/png;base64,${segresultImage}`}
              alt="Output"/>):(<p>Segmented Image</p>)
          }
         
        </Card>
      </Grid>

      <Grid className='right-Side ' sx={{width:'100%'}}>
        <Grid item xs={5} className='background_ centeByrow btn_area'>
            <ButtonGroup
            disableElevation
            variant="outlined" 
            aria-label="text button group"
            >
            
            <Button component="label" className='button'>
              Upload
              <input hidden accept="image/*" id='image-upload' multiple type="file" onChange={handleImageChange} />
            </Button>
            <Button startIcon={<DeleteIcon />} onClick={handleClearImage} className='button'>
              Delete
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={7} className='background_ centeByrow submit-btn'>
          <ButtonGroup
            disableElevation
            variant="outlined" aria-label="text button group"
          >
            <Button  endIcon={<SendIcon />}  onClick={handleSubmit} className='button'>
              Send
            </Button>
            <Button className='button' endIcon={<DownloadIcon />} onClick={handleImageDownload}>Download </Button>
          </ButtonGroup>
        </Grid>
      </Grid>

      
      
    </Grid>
  </Box>
  )
}

export default SegmentImg