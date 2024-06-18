import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { page1 } from './database';


export interface StoriesType {
  image: string;
  heading: string;
  content: string;
  name: string; 
  subname:string
  country?:string
}



const Stories = () => {
  const baseURL = "https://api.first.org/data/v1/countries";
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 4;
  const [stories, setStories] = useState<StoriesType[]>([]);
  const storiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(baseURL);
        if (response.status === 200) {
          const countryNames:string[]= Object.values(response.data.data).map(
            (country:any) => country.country
          );
          // console.log(countryNames)
          setCountries(countryNames.slice(0,7));
        }
      } catch (error) {
        // console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const filteredStories = selectedCountry ? page1.filter((stories)=>stories.country?.toLowerCase().includes(selectedCountry.toLowerCase())) : page1

    // console.log(filteredStories)
    // console.log(page1.slice(4,8))
    const indexOfLastStory = currentPage * storiesPerPage;
    // console.log(indexOfLastStory,"ddddd")
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    // console.log(indexOfFirstStory,"aaaaaaaaaaa")
    const currentStories:StoriesType[] = filteredStories.slice(
      indexOfFirstStory,
      indexOfLastStory
    );
    // console.log(currentStories,"tttttttt")
    setStories(currentStories);

    if (storiesRef.current) {
      storiesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage, selectedCountry]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToPage = (page:number) => {
    setCurrentPage(page);
  };

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <>
      <div ref={storiesRef} >
        <div className="flex flex-col my-[2rem] p-3 gap-3 md:flex-row">
          <p className="text-lg text-white">
            Stories are from people whose lives changed because of this program.{" "}
            <span className="font-bold text-purple-400 text-lg">
              Share your story
            </span>
            .
          </p>
          <div className="flex flex-col md:items-center gap-3 md:flex-row">
            <span className="text-white text-lg">Read stories from</span>
            <select
              id="countries"
              className="md:w-[70%] w-full outline-none text-gray-900 text-lg rounded-md px-4 py-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
              value={selectedCountry}
              onChange={handleChange}
            >
              <option value="">All countries</option>
              {countries.map((country:string, index:number) => (
                <option className="" key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
        {stories.map((story:StoriesType, index) => (
          <div
            key={index}
            className="bg-white gap-[2.25rem] md:gap-0 p-4 mx-2 my-6 rounded-xl md:flex-row flex-col md:gap-x-[2rem] flex"
          >
            <div className="md:w-2/6">
              <img
                src={story.image}
                alt=""
                className="w-[450px] shadow-lg h-[300px] rounded-lg"
              />
            </div>
            <div className="flex md:w-4/6 gap-3 flex-col">
              <p className="font-extrabold text-xl">{story.heading}</p>
              <p className="font-base tracking-wide text-lg">{story.content}</p>
              <div className="flex mt-4 justify-between">
                <p className="text-purple-700 font-base tracking-wider text-lg cursor-pointer">
                  Read more
                </p>
                <div className="flex flex-col items-end">
                  <p className="font-bold text-lg">{story.name}</p>
                  <p className="font-thin">{story.subname}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="container mb-5 mx-auto px-4">
          <nav
            className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
            aria-label="Pagination"
          >
            <button
              className={`flex w-10 h-10 mr-1 justify-center items-center rounded-full ${
                currentPage === 1 ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={prevPage}
              title="Previous Page"
            >
              <span className="sr-only">Previous Page</span>
              <IoIosArrowBack className="w-8 h-8 text-purple-400" />
            </button>
            {[...Array(Math.ceil(page1.length / storiesPerPage)).keys()].map(
              (page) => (
                <button
                  key={page}
                  className={`flex w-10 h-10 mx-1 justify-center items-center rounded-full bg-opacity-15 text-gray-200 bg-gray-400 ${
                    currentPage === page + 1 ? "bg-purple-400 text-white" : ""
                  }`}
                  onClick={() => goToPage(page + 1)}
                  title={`Page ${page + 1}`}
                >
                  {page + 1}
                </button>
              )
            )}
            <button
              className={`flex w-10 h-10 ml-1 justify-center items-center rounded-full ${
                currentPage === Math.ceil(page1.length / storiesPerPage)
                  ? "opacity-50 pointer-events-none"
                  : ""
              }`}
              onClick={nextPage}
              title="Next Page"
            >
              <span className="sr-only">Next Page</span>
              <IoIosArrowForward className="w-8 h-8 text-purple-400" />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Stories;
