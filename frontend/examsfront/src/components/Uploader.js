import React, { useState, useEffect } from "react";
import { uploadFile } from "react-s3";
import { Buffer } from "buffer";
import axios from "axios";
import Swal from "sweetalert2";
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
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const [uservideos, setUserVideos] = useState([]);
  const fetchvideos = async () => {
    let headersList = {
      Authorization: `Basic ${sessionStorage.getItem("token")}`,
    };

    let reqOptions = {
      url: `${process.env.REACT_APP_API_URL}/videos/${sessionStorage.getItem("id")}`,
      method: "GET",
      headers: headersList,
    };

    try {
      let response = await axios.request(reqOptions);
      setUserVideos(response.data.data);
    } catch (error) {
      if (error.response.status === 403 || 401) {
        Logout();
      }
    }
  };
  function Logout() {
    sessionStorage.clear();
    window.location.href = "/login";
  }

  useEffect(() => {
    fetchvideos();
  });
  function getTitle(e) {
    setTitle(e.target.value);
  }
  function getCategory(e) {
    setCategory(e.target.value);
  }
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleUpload = async (file) => {
    uploadFile(file, config)
      .then(async (data) => {
        console.log(data);
        console.log(data.key); //name
        console.log(title); //get title
        console.log(category); //get title

        let headersList = {
          Authorization: `Basic ${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
        };

        let bodyContent = JSON.stringify({
          categoryId: category,
          userId: sessionStorage.getItem("id"),
          name: data.key,
          title: title,
        });

        let reqOptions = {
          url: `${process.env.REACT_APP_API_URL}/videos/create`,
          method: "POST",
          headers: headersList,
          data: bodyContent,
        };

        let response = await axios.request(reqOptions);
        console.log(response.data);
        if (response.status === 200) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Video has been uploaded",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(function () {
            window.location.reload();
          }, 3000);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="filmmaker">
      <div className="filmmaker_left">
        <div>Category:</div>
        <input type="text" onChange={getCategory} />

        <br />
        <br />
        <br />
        <div>Title:</div>
        <input type="text" onChange={getTitle} />

        <br />
        <br />
        <br />
        <div>File Upload</div>
        <input type="file" onChange={handleFileInput} />

        <button
          className="videoupload"
          onClick={() => handleUpload(selectedFile)}
        >
          {" "}
          Upload Video
        </button>
      </div>

      <div className="filmmaker_right">
        <div className="ifmawelcome">
          {" "}
          <span> You are welcome {sessionStorage.getItem("firstname")}</span>
          <button onClick={Logout}>Logout</button>
        </div>
        <div className="AllVideos">
          {uservideos.map((uservideo, index) => (
            <div key={index} className="video">
              <video width="200px" height="300px" controls>
                <source
                  src={`${process.env.REACT_APP_CLOUDFRONTURL}/${uservideo.name}`}
                />
              </video>
              <p className="title">
                {uservideo.title} <span className="badge__label">Free</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uploader;
