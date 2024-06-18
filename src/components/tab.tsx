import React, { useState } from "react";
import ReadONlyTabs from "./readonlyTab";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { heading, subContent } from "./database";
import LessonsContent from "./LessonsContent";
import Stories from "./Stories";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [showSections, setShowSections] = useState(Array(9).fill(false))
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  
  
  const togglePlay = (index: number) => {
    // console.log(showSections,...showSections,"dfddddddd")
    const updatedSections = [...showSections];
    // console.log(updatedSections[index],'sdfdfghh')
    updatedSections[index] = !updatedSections[index];
    // console.log(updatedSections[index],'dfrtryuyhrty6g')
    console.log(updatedSections)
    setShowSections(updatedSections);
  };

  return (
    <>
       {/* All tabs---- */}
      <div className="text-lg  sm:text-3xl font-semibold text-center text-white border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2 cursor-pointer">
            <a
              className={`inline-block p-4 border-b-2 ${
                activeTab === "Overview"
                  ? "border-b-purple-500 border-b-[6px]  text-white"
                  : "border-transparent text-gray-600 hover:text-gray-600  dark:hover:text-gray-300"
              } rounded-t-lg`}
              onClick={() => handleTabClick("Overview")}
            >
              Overview
            </a>
          </li>
          <li className="me-2 cursor-pointer">
            <a
              className={`inline-block p-4 border-b-2 ${
                activeTab === "Lessons"
                  ? "border-b-purple-500 border-b-[6px]  text-white"
                  : "border-transparent text-gray-600 hover:text-gray-600  dark:hover:text-gray-300"
              } rounded-t-lg`}
              onClick={() => handleTabClick("Lessons")}
            >
              Lessons
            </a>
          </li>
          <li className="me-2 cursor-pointer">
            <a
              className={`inline-block p-4 border-b-2 ${
                activeTab === "Stories"
                  ? "border-b-purple-500 border-b-[6px]  text-white"
                  : "border-transparent text-gray-600 hover:text-gray-600  dark:hover:text-gray-300"
              } rounded-t-lg`}
              onClick={() => handleTabClick("Stories")}
            >
              Stories
            </a>
          </li>
        </ul>
      </div>

      {/* Active tabs-----with content */}
      <div className="mt-4">
        {activeTab === "Overview" && (
          <div>
            <ReadONlyTabs />

            {/* All paragraphs and images */}
            <div>
            <div className="flex mx-4 tracking-wide justify-center mt-[3rem] md:mt-[5rem] font-bold text-white text-4xl">
              <div className="text-center">
                <p>
                  Master the Mindvalley method for extraordinary personal
                  transformation
                </p>
              </div>
            </div>
            <div
              id="test"
              className="mt-[2rem] md:mt-[3rem] font-base tracking-wider text-lg text-white"
            >
              <p>
                Your Mindvalley Membership is far more than a curriculum of
                programs.
              </p>
              <p className="mt-[1rem]">
                It’s a thriving and borderless ecosystem of knowledge,
                experiences, community, and technologies designed to awaken the
                best version of you.
              </p>
              <p className="mt-[1rem]">
                Our approach to personal transformation is one-of-a-kind.
              </p>
              <p className="mt-[1rem]">
                And it’s why tens of thousands of Mindvalley Members experience{" "}
                <span className="font-extrabold underline">
                  {" "}
                  life-changing breakthroughs
                </span>{" "}
                every day - often within a few short weeks of joining us.
              </p>
              <p className="mt-[1rem] font-extrabold">
                Getting Started with Mindvalley is your roadmap for navigating
                our world, and making it your own.
              </p>
              <p className="mt-[1rem]">
                And in just 30+ minutes, you’ll emerge with the clarity and
                inspiration you need to start transforming, connecting, and
                living at your fullest potential with your Mindvalley
                Membership.
              </p>
            </div>
            <div className="flex  tracking-wide justify-center mt-[3rem] md:mt-[6rem] font-bold text-white text-4xl">
              <div className="text-center mx-4">
                <p>
                  Meet Vishen, your personal guide and founder of Mindvalley
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/img/author.webp"
                alt=""
                className="rounded-xl mt-[2rem] md:mt-[4rem]"
              />
            </div>
            <div className="mt-[2rem] md:mt-[3rem] font-base tracking-wider text-lg text-white">
              <p>
                Vishen is the founder of Mindvalley: the world’s largest
                personal growth movement, with over 20 million students
                worldwide including you.
              </p>
              <p className="mt-[1rem]">
                A bestselling international author and speaker, he is regarded
                as one of the foremost experts in the field of human
                development.
              </p>
              <p className="mt-[1rem]">
                {" "}
                And as the chief architect of the Mindvalley experience, he’ll
                personally guide you through every step of starting - and
                sticking to - your journey of personal transformation with us.
              </p>
            </div>
            <div className="flex  tracking-wide justify-center mt-[3rem] md:mt-[6rem] font-bold text-white text-4xl">
              <div className="text-center mx-4">
                <p className="">The Curriculum</p>
              </div>
            </div>
            <div className="flex text-center  tracking-wide justify-center mt-[2rem] md:mt-[3rem] font-bold text-white text-3xl">
              <p>Explore the Getting Started with Mindvalley curriculum</p>
            </div>
            <div className="flex justify-center">
              <img
                src="/img/devices_curriculum.webp"
                alt=""
                className="rounded-xl mt-[2rem] md:mt-[4rem]"
              />
            </div>
            <div className="text-center font-light text-sm text-white my-4">
              <p>
                Available on your personal computer, tablet, smartphone & Apple
                TV
              </p>
            </div>
            <div className="mt-[2rem] md:mt-[3rem] font-base tracking-wider text-lg text-white">
              <p>
                Your Getting Started with Mindvalley program is{" "}
                <span className="font-extrabold underline">free</span> - and
                it’s waiting for you in your Mindvalley Home account.
              </p>
              <p className="mt-[1rem]">
                With Vishen as your guide, you’ll embark on a series of
                bite-sized microlessons: each covering a unique aspect of your
                Mindvalley Membership.
              </p>
              <p className="mt-[1rem]">
                {" "}
                From setting up your profile, to choosing your first Quest, to
                immersing yourself in our global experiences and technology:
                you’re guided through every step of maximizing your
                transformation with Mindvalley.
              </p>
            </div>

            </div>


            {/* sub menu open section */}
            <div className="mt-[5rem] border-none">
              <div
                id="accordion-collapse"
                className=" border-none text-white  mt-[2rem]"
              >
                {[...Array(9)].map((_, index) => (
                  <div
                    key={index}
                    className="flex my-[2rem] pb-[2rem] border-b border-white border-opacity-20 flex-col sm:flex-row"
                  >
                    <div className="flex flex-col  sm:flex-row justify-start w-full">
                      <div
                        onClick={() => togglePlay(index)}
                        className="flex cursor-pointer   gap-x-5 sm:w-1/5"
                      >
                        {showSections[index] === false ? (
                          <p className="text-xl sm:text-3xl">
                            <IoMdAddCircleOutline className="text-purple-500 w-6 h-6 sm:w-10 sm:h-10" />
                          </p>
                        ) : (
                          <p className="text-xl sm:text-3xl">
                            <IoMdRemoveCircleOutline className="text-purple-500 w-6 h-6 sm:w-10 sm:h-10" />
                          </p>
                        )}
                        <div className="flex mx-3 sm:flex-col">
                          <p className="text-xl">Lesson </p>
                          <p className="text-center text-xl sm:text-3xl sm:font-extrabold">
                            {index + 1}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col md:ms-[2rem] lg:ms-[4rem] ml-14 sm:ml-0 content-fit overflow-wrap-normal sm:w-4/5">
                        <p className="text-x  sm:text-4xl font-bold">
                          {heading[index]}
                        </p>
                        {showSections[index] && (
                          <div className="my-[1rem]">
                            <span className="text-wrap font-base tracking-wider text-sm md:text-lg text-white break-words">
                             {subContent[index]}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === "Lessons" && (
          <div>
            <LessonsContent/>
          </div>
        )}
        {activeTab === "Stories" && (
          <div>
           <Stories/>
          </div>
        )}
      </div>
    </>
  );
};

export default Tab;
