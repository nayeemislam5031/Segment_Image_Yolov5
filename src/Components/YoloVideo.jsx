import React from 'react'
import { Grid,Button,CardContent, Card,ButtonGroup, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';
import gif from '../Assets/lauzhack-train.gif';
import  '../CSS/Yolo5Video.css';
import {saveAs} from 'file-saver';
import  { useState } from 'react';

const YoloVideo = () => {
  // const [upvideo, setUpVideo] = useState(null);
  // const [showVideo, setShowVideo] = useState('');
  // const [resultVideo, setResultVideo] = useState('');
  // const [downloadVideo, setdownloadVideo] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayvideo, setDisplayvideo] = useState(null)
  const [outputUrl, setOutputUrl] = useState("");
  const [outputdisplay,setOutputDisplay]= useState("")

  //******************* loading************************* */
  // const [loading, setLoading] = React.useState(true);
  

// ************************Video Handle **********************
const handleVideoUpload = (event) => {
  setSelectedFile(event.target.files[0]);
  setDisplayvideo(URL.createObjectURL(event.target.files[0]));
  
 
};
// ****************** Submit ****************************
const handleClearVideo = () => {
  // setUpVideo(null)
  // setShowVideo('')
  // document.getElementById('Video-upload').value = null;
};
const handleVideoDownload = () => {
  // window.open(resultVideo, '_blank');
  // saveAs(downloadVideo,'output.mp4');
};

const handleSubmit = async (event) => {
  // var formData = new FormData();
  //   formData.append("file", selectedFile );
    
  //   var requestOptions = {
  //       method: 'POST',
  //       body: formData,
  //       redirect: 'follow'
  //   };

  //   fetch(`http://land.zaisoft.io/yolo5_vid`, requestOptions)
  //       .then(response => response.text())
  //       .then((result) => {
  //         console.log(result)
  //         setOutputUrl(result);
  //         setOutputdisplay(`data:video/mp4;base64,${outputUrl}`);
  //         })
  //       .catch(error => console.log('error', error));

  
  
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://land.zaisoft.io/yolo5_vid", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        console.log(url);
        setOutputUrl(url);
        
        
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    
};

  return (
    <Box>
      <heading className='titile'>
        <h3>Detect Video with Yolov5</h3>
    </heading>
    <Grid container spacing={2} sx={{marginTop:'10px'}}>
      
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}  className='centeByrow ' >
            <Grid className='Video-container'>
                {selectedFile && (
                <video controls className='Video-container' autoPlay muted loop>
                  <source src={displayvideo} type="video/mp4" />
                </video>
              )}
            </Grid>
            <Grid className='Video-container'>
                  {outputUrl && (
                  <video controls className='Video-container' autoPlay loop>
                    <source src={outputUrl} type="video/mp4" />
                  </video>
                )}
            </Grid>
          {/* {
          showVideo?(<video onChange={() => setLoading(!loading)} src={showVideo}  className='Video-container' placeholder=' Video' controls autoPlay loop ></video>):( <img src={gif} className='Video-container' alt="gif" placeholder='Example'></img> )
        } */}
        {/* {
          selectedFile?(<video src={displayvideo}  className='Video-container' placeholder=' Video' controls autoPlay loop ></video>):(<img src={gif} className='Video-container' alt="gif" placeholder='Example'></img>)
        } */}
        
          {/* {outputUrl && (
            <video controls className='Video-container' autoPlay loop>
              <source src={outputUrl} type="video/mp4" />
            </video>
          )} */}
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid  className='centeByrow'>
              <Card class="card1">
                <CardContent class="card2">
                  <div sx={{ positoin: 'end'}} className=' Card-content centerByCol'>
                  <ButtonGroup
                    orientation="vertical"
                    variant="text"
                    aria-label="vertical outlined button group"
                  >
                    <Button className='button' component="label">Upload <input hidden accept="Video/*" id='Video-upload' multiple type="file" onChange={handleVideoUpload} />
                    </Button>
                    <Button startIcon={<DeleteIcon />} className='button' onClick={handleClearVideo} >Cancle</Button>
                    <Button 
                    // loading={loading} 
                    endIcon={<SendIcon />} className='button' onClick={handleSubmit} >Send</Button>
                    <Button endIcon={<DownloadIcon />} className='button' onClick={handleVideoDownload}>Download</Button>
                  </ButtonGroup>   
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid> 
        </Grid>
    </Grid>
    </Box>
  )
}

export default YoloVideo