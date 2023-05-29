import React, { useState } from "react";


const Video = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputUrl, setOutputUrl] = useState("");
  

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {


    var formData = new FormData();
    formData.append("file", selectedFile );
    
    var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };

    fetch(`http://land.zaisoft.io/yolo5_vid`, requestOptions)
        .then(response => response.text())
        .then((result) => {
          console.log(result)
          setOutputUrl(result);
          })
        .catch(error => console.log('error', error));
};  
  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button variant="contained" color="primary" onClick={handleSubmit}>
        Upload Video
      </button>

      
      {outputUrl && (
        <video controls>
          <source src={outputUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Video