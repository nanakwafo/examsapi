import React, { useState, useEffect } from "react";

const [allvideos, setVideos] = useState([]);
const fetchvideos = async () => {
  let headersList = {
    Authorization: `Basic ${sessionStorage.getItem("token")}`,
  };

  let reqOptions = {
    url: "http://54.221.175.103:4000/videos/6435414bade0d675d1b7e027",
    method: "GET",
    headers: headersList,
  };

  // try {
  //   let response = await axios.request(reqOptions);
  //   setUserVideos(response.data.data);
  // } catch (error) {
  //   if (error.response.status === 403 || 401) {
  //     this.Logout();
  //   }
  // }
};















function filmviewer() {
  return (
    <div className="filmviewer">
      
      <div className="AllVideos">
        <div className="video">
          <video width="600px" height="300px" controls>
            <source src="https://d2s3hb6ysmsfq9.cloudfront.net/Build%20a%20Video%20Streaming%20Service%20like%20YouTube,%20Netflix%20using%20AWS%20S3,%20CloudFront%20and%20React.mp4" />
          </video>
          <p className="title">Moviesa and films <span className="badge__label">Free</span></p>
        </div>
        <div className="video">
          <video width="600px" height="300px"  controls>
            <source src="https://d2s3hb6ysmsfq9.cloudfront.net/Build%20a%20Video%20Streaming%20Service%20like%20YouTube,%20Netflix%20using%20AWS%20S3,%20CloudFront%20and%20React.mp4" />
          </video>
          <p className="title">Moviesa and films <span className="badge__label">Free</span></p>
        </div>
        <div className="video">
          <video width="600px" height="300px"  controls>
            <source src="https://d2s3hb6ysmsfq9.cloudfront.net/Build%20a%20Video%20Streaming%20Service%20like%20YouTube,%20Netflix%20using%20AWS%20S3,%20CloudFront%20and%20React.mp4" />
          </video>
          <p className="title">Moviesa and films <span className="badge__label">Free</span></p>
        </div>
        <div className="video">
          <video width="600px" height="300px"  controls>
            <source src="https://d2s3hb6ysmsfq9.cloudfront.net/Build%20a%20Video%20Streaming%20Service%20like%20YouTube,%20Netflix%20using%20AWS%20S3,%20CloudFront%20and%20React.mp4" />
          </video>
          <p className="title">Moviesa and films <span className="badge__label">Free</span></p>
        </div>
      </div>
       <br/>
      <div className="filmviewer_footer"></div>
    </div>
  );
}
export default filmviewer;
