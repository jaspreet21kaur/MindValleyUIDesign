import React, { useState, useRef ,useEffect} from "react";
import { FaArrowLeft, FaPause } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { GoUnmute, GoMute, GoScreenFull } from "react-icons/go";
import { GoBook } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import Tab from "../components/tab";
import Tooltip from "../components/toolip";

const Design = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRef = useRef(null);


  


  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      videoRef.current.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-700 px-4 sm:px-6 lg:px-[12rem] overflow-y-scroll">
      <div className="max-w-screen-xl mx-auto lg:ml-16 lg:mr-16">
        {/* video section */}
        <div className="video-section relative lg:flex">
          <video
            ref={videoRef}
            className="w-full  rounded-b-3xl object-cover"
            autoPlay
            loop
            muted={isMuted}
          >
            <source src="/video/mind.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="lg:w-full  lg:pl-8 lg:py-4 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-start">
            <div className="flex lg:flex-col justify-start gap-x-4  items-center">
              <div className="flex w-full">
                <div className="relative cursor-pointer flex justify-center gap-x-3 items-center">
                  <Tooltip text="Back to Programs">
                    <div className="flex justify-center text-white gap-1 lg:gap-x-3 items-center">
                      <FaArrowLeft className=" lg:w-6 lg:h-6" />
                      <button
                        type="button"
                        className="relative text-sm md:text-lg text-white mr-12 font-bold"
                      >
                        Back to Programs
                      </button>
                    </div>
                  </Tooltip>
                </div>
                <p className="font-bold text-white text-sm md:text-lg">
                  Getting started with MindValley
                </p>
              </div>
            </div>
            <div className="flex text-white md:mr-5 justify-end gap-4">
              <button onClick={togglePlay} title={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? (
                  <FaPause className="w-5 h-5 md:w-10 lg:h-10 opacity-65" />
                ) : (
                  <FaCirclePlay className="w-5 h-5 md:w-10 lg:h-10 opacity-65" />
                )}
              </button>
              <button onClick={toggleMute}>
                {isMuted ? (
                   <GoMute className="w-5 h-5 md:w-10 lg:h-10 opacity-65" />
                ) : (
                  
                  <GoUnmute className="w-5 h-5 md:w-10 md:h-10 opacity-65" />
                )}
              </button>
              <button onClick={toggleFullScreen}>
                <GoScreenFull className="w-5 h-5 md:w-10 md:h-10 opacity-65" />
              </button>
            </div>
          </div>
        </div>

        {/* Getting started with valley section */}
        <div className="flex flex-col sm:flex-row w-full mt-[2rem] border-b border-white border-opacity-20">
          <div className="sm:w-1/6"> 
              <img
                src="https://assets.mindvalley.com/api/v1/assets/b7249d98-ecf0-48f0-82d8-6e2dedbd9ed8.jpeg"
                className="hidden h-[90px] lg:w-[140px] w-[160px] rounded-2xl sm:block"
              /> 
          </div>
          <div className="sm:w-3/6 ms-[0.5rem]">
          <div className="text-4xl font-bold text-white lg:title-bold-5">
                Getting Started with Mindvalley
              </div>
              <div className="title-8 mt-2 text-gray-300">Vishen</div>
              <div className="title-10 my-3 flex flex-wrap items-center text-gray-300 lg:title-8">
                <div className="mb-2 flex items-center md:mb-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 2H16C14.7 2 13.4 2.5 12.5 3.5C12.3 3.6 12.1 3.8 12 4C11.9 3.8 11.7 3.6 11.5 3.4C10.6 2.5 9.3 2 8 2H2C1.4 2 1 2.4 1 3V18C1 18.6 1.4 19 2 19H9C9.5 19 10 19.2 10.4 19.6C10.8 20 11 20.5 11 21C11 21.6 11.4 22 12 22C12.6 22 13 21.6 13 21C13 20.5 13.2 20 13.6 19.6C14 19.2 14.5 19 15 19H22C22.6 19 23 18.6 23 18V3C23 2.4 22.6 2 22 2ZM11 17.5C10.4 17.2 9.7 17 9 17H3V4H8C8.8 4 9.6 4.3 10.1 4.9C10.6 5.5 11 6.2 11 7V17.5ZM21 17H15C14.3 17 13.6 17.2 13 17.5V7C13 6.2 13.3 5.4 13.9 4.9C14.4 4.3 15.2 4 16 4H21V17Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div className="w-max">10 Lessons</div>
                </div>
                <div className="mx-1 md:mx-2 lg:mx-3 mb-2 flex items-center md:mb-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 5C12.5523 5 13 5.44772 13 6V11.382L16.4472 13.1056C16.9412 13.3526 17.1414 13.9532 16.8944 14.4472C16.6474 14.9412 16.0468 15.1414 15.5528 14.8944L11.5528 12.8944C11.214 12.725 11 12.3788 11 12V6C11 5.44772 11.4477 5 12 5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div className="w-max">1 hour 11 mins</div>
                </div>
                <div className="mb-2 flex items-center md:mb-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H13C14.3261 14 15.5979 14.5268 16.5355 15.4645C17.4732 16.4021 18 17.6739 18 19V21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21V19C16 18.2043 15.6839 17.4413 15.1213 16.8787C14.5587 16.3161 13.7956 16 13 16H5C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2043 2 19V21C2 21.5523 1.55228 22 1 22C0.447715 22 0 21.5523 0 21V19C0 17.6739 0.526784 16.4021 1.46447 15.4645Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4ZM4 7C4 4.23858 6.23858 2 9 2C11.7614 2 14 4.23858 14 7C14 9.76142 11.7614 12 9 12C6.23858 12 4 9.76142 4 7Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.0318 14.88C19.1698 14.3453 19.7153 14.0237 20.25 14.1618C21.3227 14.4387 22.273 15.0641 22.9517 15.9396C23.6304 16.8152 23.9992 17.8914 24 18.9993V21C24 21.5523 23.5523 22 23 22C22.4477 22 22 21.5523 22 21V19.0007C22 19.0008 22 19.0006 22 19.0007C21.9994 18.3361 21.7782 17.6902 21.371 17.165C20.9638 16.6396 20.3936 16.2644 19.75 16.0982C19.2153 15.9602 18.8937 15.4147 19.0318 14.88Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.0312 2.88196C15.1682 2.34694 15.713 2.02426 16.248 2.16125C17.3236 2.43663 18.2768 3.06213 18.9576 3.93914C19.6383 4.81615 20.0078 5.89479 20.0078 7.005C20.0078 8.11521 19.6383 9.19385 18.9576 10.0709C18.2768 10.9479 17.3236 11.5734 16.248 11.8487C15.713 11.9857 15.1682 11.6631 15.0312 11.128C14.8943 10.593 15.2169 10.0482 15.752 9.91125C16.3973 9.74602 16.9692 9.37072 17.3777 8.84452C17.7861 8.31831 18.0078 7.67113 18.0078 7.005C18.0078 6.33887 17.7861 5.69169 17.3777 5.16548C16.9692 4.63928 16.3973 4.26398 15.752 4.09875C15.2169 3.96176 14.8943 3.41699 15.0312 2.88196Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div className="w-max">58,326 Enrolled</div>
                </div>
              </div>
          </div>
          <div className="sm:w-2/6">
          <div className="ml-0 flex w-full flex-col lg:ml-2">
                <button className="capitalise button-text block h-12 w-full rounded-full bg-white md:px-[1.2rem] text-center text-black   ">
                  Start Program
                </button>
                <div className="title-9 mt-3 flex items-center justify-center text-cool-gray-400">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.8839 5.11612C20.3957 4.62796 19.6043 4.62796 19.1161 5.11612L9 15.2322L4.88388 11.1161C4.39573 10.628 3.60427 10.628 3.11612 11.1161C2.62796 11.6043 2.62796 12.3957 3.11612 12.8839L8.11612 17.8839C8.60427 18.372 9.39573 18.372 9.88388 17.8839L20.8839 6.88388C21.372 6.39573 21.372 5.60427 20.8839 5.11612Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div className="text-xs">You Own This Program</div>
                </div>
              </div>
          </div> 
        </div>

        {/* Paragraph below getting started with valley */}
        <div
            className="body-small  pt-3 text-gray-500 lg:px-0 lg:py-3 flex  lg:flex"
            data-testid="lesson-description"
          >
            An introductory program for new students looking to navigate and
            master the Mindvalley platform. Mindvalley is a thriving and
            borderless ecosystem of knowledge, experiences, community, and
            technologies designed to awaken the best version of you. Here, in a
            series of micro-lessons, CEO and founder Vishen guides you through
            how to make the most of it.
          </div>


        {/* tab section---- */}
        <section className="mt-8">
          <Tab />
        </section>
      </div>
    </div>
  );
};

export default Design;
