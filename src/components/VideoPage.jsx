import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import Nav from "../components/Nav";
import Title from "../components/Title";
import VideoPageElem from "../components/VideoPageElem";
import img1 from "../assests/Images/rectangle-3-3.png";

const VideoPage = () => {
  return (
    <div className="w-full h-screen bg-[#1B1B23] p-6  ">
      <div className="flex gap-10">
        <SideBar />
        <div className="flex flex-col">
          <Nav />
          <Title
            text="Manage Product Playlist - Product Title"
            showButton={false}
          />
          <div className="w-[78vw] h-[78vh] bg-[#27272F] rounded-2xl grid grid-flow-row-dense grid-cols-5 grid-rows-2">
            <VideoPageElem 
              image={img1}
              productCount={5}
              duration="4:05:60"
            />
            <VideoPageElem 
              image={img1}
              productCount={5}
              duration="4:05:60"
            />
            <VideoPageElem 
              image={img1}
              productCount={5}
              duration="4:05:60"
            />
            <VideoPageElem 
              image={img1}
              productCount={5}
              duration="4:05:60"
            />
            <VideoPageElem 
              image={img1}
              productCount={5}
              duration="4:05:60"
            />
            <VideoPageElem 
              image={img1}
              productCount={5}
              duration="4:05:60"
            />
            <VideoPageElem 
              image={img1}
              productCount={5}
              duration="4:05:60"
            />
            <VideoPageElem 
              image={img1}
              productCount={5}
              duration="4:05:60"
            />
            <VideoPageElem 
              image={img1}
              productCount={5}
              duration="4:05:60"
            />
            <VideoPageElem 
              image={img1}
              productCount={5}
              duration="4:05:60"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
