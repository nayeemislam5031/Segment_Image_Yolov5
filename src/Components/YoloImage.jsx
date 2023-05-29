import React from 'react'

import { ButtonGroup,Button,CardContent,CardMedia,Grid,Box,Card } from '@mui/material';
import '../CSS/YoloImage.css'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';
import {saveAs} from 'file-saver';
import  { useState } from 'react';


const YoloImage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [resultImage, setResultImage] = useState('');
  const [updisplayImg, setUpdisplayImg] = useState('');
  const [downloadImage, setdownloadImage] = useState('');
  

// ********************Image Handle ***************
  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
    setUpdisplayImg(URL.createObjectURL(event.target.files[0]));
    // document.getElementById('image-upload').value = null;
  };
  const handleClearImage = () => {
    setImageFile('')
    setUpdisplayImg('')
    setResultImage('')
    document.getElementById('image-upload').value = null;
  };
  
  const handleImageDownload = () => {
    // setdownloadImage  (`data:image/png;base64,${resultImage}`);
    // window.open(`data:image/png;base64,${resultImage}`);
    // window.open(`data:image/png;base64, ${resultImage} + Base64.encode(out)`);
    saveAs(downloadImage,'output.png');
    
  };

  // *********************** Submit area ******************

  const handleSubmit = async (event) => {
    event.preventDefault();

    var formData = new FormData();
    formData.append("file", imageFile );
    
    var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow',
      //   headers:{
      //     'accept': 'application/json',
      //     'Access-Control-Allow-Origin': "*",
      //     'content-type': 'application/x-www-form-urlencoded',
      //     'Access-Control-Allow-Credentials': 'true',
      // }
    };

    fetch(`http://land.zaisoft.io/yolo5_img`, requestOptions)
        .then(response => response.text())
        .then((result) => {
          console.log(result)
          setResultImage(result);
          setdownloadImage  (`data:image/png;base64,${resultImage}`);
          
          })
        .catch(error => console.log('error', error));
};  


  return (

    <Box sx={{ flexGrow: 1 }} className='background_'>
      <heading className='titile'>
        <h3> Image Detection With YOLOv5</h3>
      </heading>
      <Grid container spacing={2} className='centeByrow first-grid'>
        <Grid  xs={12} md={5} className='centeByrow'>
          <Card class="card1">
            <CardContent class="card2">
              <div sx={{ positoin: 'end'}} className=' Card-content centerByCol'>
              <ButtonGroup
                orientation="vertical"
                variant="text"
                aria-label="vertical outlined button group"
              >
                  <Button className='button' component="label">Upload <input hidden accept="image/*" id='image-upload' multiple type="file" onChange={handleImageChange} />
                  </Button>
                  <Button startIcon={<DeleteIcon />} className='button' onClick={handleClearImage}>Cancle</Button>
                  <Button endIcon={<SendIcon />} className='button' onClick={handleSubmit}>Send</Button>
                  <Button endIcon={<DownloadIcon />} className='button' onClick={handleImageDownload}>Download</Button>
              </ButtonGroup>
                  
                  
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid  xs={12} md={5} className=''>
          <Grid orientation="vertical" sx={{marginLeft:"20%", height: '100%', width: '100%' }} className=''>
              <Card sx={{ borderRadius:"10px" ,height: 200, width: '300px' }} className='card centerByCol'>
                {
                  updisplayImg?(
                    <CardMedia
                    component="img"
                    height="194"
                    image={updisplayImg}
                    alt="Input"/>
                  ):(<p>Input Image</p>)
                }
                  
              </Card>
              <Card sx={{marginTop:'10px', borderRadius:"10px" ,height: 200, width: '300px'}} className='card centerByCol'>
                {
                  resultImage? (
                    <CardMedia
                      sx={{ height: 200, width: '100%' }}
                      component="img"
                      height="194"
                      image={`data:image/png;base64,${resultImage}`}
                      // image={downloadImage}
                      alt="Output"/>
                  ):(<p>Output Image</p>)
                }
                  
              </Card>
          </Grid>
          
        </Grid>
       </Grid>
    </Box>
  )
}

export default YoloImage