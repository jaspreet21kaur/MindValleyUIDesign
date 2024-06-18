import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { VscLock } from "react-icons/vsc";


import { LessonHeading, LessonSubContent } from "./database";

interface Subsection {
  image: string; 
  LessonHeading: string;
  title: string;
  duration: string; 
  button?: boolean; 
  lock?: boolean;
}


const LessonsContent = () => {
  const [showSections, setShowSections] = useState(Array(3).fill(true));

  const togglePlay = (index:number) => {
    // console.log(showSections,...showSections,"dfddddddd")
    const updatedSections = [...showSections];
    // console.log(updatedSections[index],'sdfdfghh')
    updatedSections[index] = !updatedSections[index];
    // console.log(updatedSections[index],'dfrtryuyhrty6g')
    console.log(updatedSections);
    setShowSections(updatedSections);
  };
  return (
    <div id="accordion-collapse" className=" border-none text-white  mt-[2rem]">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="grid    my-[4rem] items-center pb-[2rem] border-b border-white border-opacity-20 sm:flex-row"
        >
          <div className="flex   w-full">
            <div
              onClick={() => togglePlay(index)}
              className="flex cursor-pointer   mr-4"
            >
              {showSections[index] === false ? (
                <p className="text- ">
                  <IoIosArrowDown className="text-white w-5 h-[2rem]" />
                </p>
              ) : (
                <p className="text-xl ">
                  <IoIosArrowUp className="text-white w-5 h-[2rem] " />
                </p>
              )}
            </div>
            <div className="flex    sm:ml-0 content-fit overflow-wrap-normal sm:w-5/6">
              <p className="text-2xl   font-bold">{LessonHeading[index]}</p>
            </div>
          </div>
          <div className="flex   ">
            {showSections[index] && LessonSubContent[index] && (
              <div className="my-[1rem] w-full ">
                {LessonSubContent[index].map((subsection:Subsection,index)=>(
                <div key={index} className="mt-[3rem] gap-x-5 p-6 cursor-pointer hover:bg-gray-200 hover:bg-opacity-5 flex justify-between items-center">
                  <div className="flex items-center gap-x-7">
                    <div className="w-[25%] hidden md:flex h-[25%] ">
                      <img src={subsection.image} alt="" className="rounded-lg" />
                    </div>
                    <div className="flex gap-y-1 flex-col">
                      <p className="text-md font-thin">{subsection.LessonHeading}</p>
                      <p className="font-bold  text-xl">{subsection.title}</p>
                      <p className="text-md font-thin">{subsection.duration}</p>
                    </div>
                  </div>
                    {subsection.button===true && (  
                  <div className="flex items-center gap-x-4">
                    <button className="text-sm py-1 px-2 bg-white text-black rounded-md">
                      PREVIEW
                    </button>
                    <IoIosArrowForward className="text-white w-5 h-[2rem]" />
                  </div>
                  )}
                  {subsection.lock===true && (
                    <div className="flex gap-x-4">
                      <VscLock className="text-white w-6 h-6" />
                    </div>
                  )}
                </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonsContent;
