import React from "react";
import VideoImg from "./VideoImg";
import img1 from "../assests/Images/rectangle-3-3.png";
import img2 from "../assests/Images/image-47.png";
import img3 from "../assests/Images/image-48.png";
import img4 from "../assests/Images/image-49.png";
import img5 from "../assests/Images/image-49-2.png";
import { useNavigate } from 'react-router-dom'

const Video = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/video') // Replace 123 with your actual video ID
  }

  return (
    <div onClick={handleClick}>
      <div className="w-[52vw] h-[76vh] bg-[#27272F] rounded-2xl grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        <VideoImg image={img1} />
        <VideoImg image={img2} />
        <VideoImg image={img3} />
        <VideoImg image={img5} />
        <VideoImg image={img3} />
        <VideoImg image={img4} />
      </div>
    </div>
  );
};

export default Video;
