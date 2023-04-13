import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Videos = () => {
  const [allvideos, setVideos] = useState([]);
  const fetchvideos = async () => {
    let headersList = {
      Accept: "*/*",
    };

    let reqOptions = {
      url: "http://54.221.175.103:4000/videos",
      method: "GET",
      headers: headersList,
    };

    try {
      let response = await axios.request(reqOptions);
      setVideos(response.data.data);
    } catch (error) {
      if (error.response.status === 403 || 401) {
        this.Logout();
      }
    }
  };

  useEffect(() => {
    fetchvideos();
  }, []);

  return (
    <div className="filmviewer">
      <div className="ifmawelcome">
        <div className="linksContainer">
          <Link className="links" to={"/"}>
            Home
          </Link>
          <Link className="links" to={"/login"}>
            SignIn
          </Link>
          <Link className="links" to={"/register"}>
            Sign Up
          </Link>
        </div>
      </div>
      <div className="AllVideos">
        {allvideos.map((video, index) => (
          <div key={index} className="video">
            <video width="200px" height="300px" controls>
              <source
                src={`https://d2s3hb6ysmsfq9.cloudfront.net/${video.name}`}
              />
            </video>
            <p className="title">
              {video.title} <span className="badge__label">Free</span>
            </p>
          </div>
        ))}
      </div>
      <br />
      <div className="filmviewer_footer">
        <div className="HomeContainer_left_Logo">
          <img
            src="https://www.ifmacinema.com/assets/logo/logo.png"
            alt="logo.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Videos;
