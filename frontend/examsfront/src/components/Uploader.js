import React, { useState } from "react";
import { uploadFile } from "react-s3";
import { Buffer } from "buffer";
Buffer.from("anything", "base64");

window.Buffer = window.Buffer || require("buffer").Buffer;

const S3_BUCKET = "videosexams";
const REGION = "us-east-1";
const ACCESS_KEY = "AKIASM5GJ6VSXOXC4CHQ";
const SECRET_ACCESS_KEY = "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";

const config = {
  bucketName: S3_BUCKET,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
};

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title,setTitle] =useState(null);

  function getTitle(e){
    setTitle(e.target.value);
  };
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (file) => {
    

    uploadFile(file, config)
      .then((data) => {
        console.log(data)
        console.log(data.key)//name
        console.log(title)//get title
    
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="filmmaker">
      <div className="filmmaker_left">
        <div>Title:</div>
        <input type="text" onChange={getTitle} />
        
        <br/>
        <br/>
        <br/>
        <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput} />

        <button onClick={() => handleUpload(selectedFile)}>
          {" "}
          Upload to S3
        </button>
      </div>

      <div className="filmmaker_right">
      <div className="AllVideos">
        <div className="video">
          <video width="200px" height="300px" controls>
            <source src="https://d2s3hb6ysmsfq9.cloudfront.net/Build%20a%20Video%20Streaming%20Service%20like%20YouTube,%20Netflix%20using%20AWS%20S3,%20CloudFront%20and%20React.mp4" />
          </video>
          <p className="title">Moviesa and films <span className="badge__label">Free</span></p>
        </div>
        <div className="video">
          <video width="200px" height="300px"  controls>
            <source src="https://d2s3hb6ysmsfq9.cloudfront.net/Build%20a%20Video%20Streaming%20Service%20like%20YouTube,%20Netflix%20using%20AWS%20S3,%20CloudFront%20and%20React.mp4" />
          </video>
          <p className="title">Moviesa and films <span className="badge__label">Free</span></p>
        </div>
        <div className="video">
          <video width="200px" height="300px"  controls>
            <source src="https://d2s3hb6ysmsfq9.cloudfront.net/Build%20a%20Video%20Streaming%20Service%20like%20YouTube,%20Netflix%20using%20AWS%20S3,%20CloudFront%20and%20React.mp4" />
          </video>
          <p className="title">Moviesa and films <span className="badge__label">Free</span></p>
        </div>
        <div className="video">
          <video width="200px" height="300px"  controls>
            <source src="https://d2s3hb6ysmsfq9.cloudfront.net/Build%20a%20Video%20Streaming%20Service%20like%20YouTube,%20Netflix%20using%20AWS%20S3,%20CloudFront%20and%20React.mp4" />
          </video>
          <p className="title">Moviesa and films <span className="badge__label">Free</span></p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Uploader;
