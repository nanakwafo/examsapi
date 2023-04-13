import React, { useState, useEffect } from "react";
import axios from "axios";


const Videos = () => {
    const [allvideos, setVideos] = useState([]);
    const fetchvideos = async () => {
  
      let headersList = {
       
       "Authorization": `Basic ${sessionStorage.getItem("token")}`
      }
      
      let reqOptions = {
        url: "http://54.221.175.103:4000/videos/",
        method: "GET",
        headers: headersList,
      }
      
    try {
        let response = await axios.request(reqOptions);
        setVideos(response.data.data);
      } catch (error) {
        if (error.response.status === 403 || 401) {
          this.Logout();
        }
      } 
    };
    const Logout = () => {
        sessionStorage.clear();
        window.location.href = "/login";
    };


    useEffect(() => {
      fetchvideos();
    }, []);
    
    return (
      <div className="filmviewer">
        <div className="ifmawelcome">
          {" "}
          <span> You are welcome {sessionStorage.getItem("firstname")}</span>
          <button onClick={Logout}>Logout</button>
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
         <br/>
        <div className="filmviewer_footer"></div>
      </div>
    );
};

export default Videos;
