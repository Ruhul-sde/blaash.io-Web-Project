import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SideBar from "./components/SideBar";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Video from "./components/Video";
import Thumbnail from "./components/Thumbnail";
import VideoPage from "./components/VideoPage";
import Login from "./components/Login";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import GenerateCodeSettings from "./components/GenerateCodeSettings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full h-screen bg-[#1B1B23] p-6 flex gap-10">
              <SideBar />
              <div className="flex flex-col items-center">
                <Nav />
                <Title text="Product Playlist" showButton={true} />
                <div className="flex gap-5">
                  <Link to="/video">
                    <Video />
                  </Link>
                  <Thumbnail />
                </div>
              </div>
            </div>
          }
        />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route
          path="/generate-code-settings"
          element={<GenerateCodeSettings />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
