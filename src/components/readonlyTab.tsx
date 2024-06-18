import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { GoBook, GoPeople } from 'react-icons/go'

const ReadONlyTabs = () => {
  return (

    // 10 lesons and all display
    <div className='mt-[3rem]'>
    <ul className=" text-xl lg:text-sm text-center  rounded-lg shadow sm:flex dark:divide-white text-white">
        <li className="w-full focus-within:z-10">
            <a  className="inline-block w-full sm:p-4 md:rounded-s-xl sm:bg-gray-600  sm:border-r border-gray-200 dark:border-gray-700   text-white">
            <div className='flex items-center sm:justify-center tracking-wide font-base gap-x-2 text-white'>
                <GoBook className='w-6 h-6'/>
                <p> 10 Lessons</p>
                </div>
            </a>
        </li>
        <li className="w-full focus-within:z-10">
        <a  className="inline-block w-full sm:p-4  sm:bg-gray-600  sm:border-r border-gray-200 dark:border-gray-700   text-white">
        <div className='flex items-center sm:justify-center tracking-wide font-base gap-x-2 text-white'>
                <FaRegClock className='w-6 h-6'/>
                <p> 1 hour 11 mins</p>
                </div>
        </a>
        </li>
        <li className="w-full focus-within:z-10">
        <a  className="inline-block w-full sm:p-4 md:rounded-e-xl sm:bg-gray-600   dark:border-gray-700   text-white">
        <div className='flex items-center sm:justify-center tracking-wide font-base gap-x-2 text-white'>
                <GoPeople className='w-6 h-6'/>
                <p> 58,282 Enrolled</p>
            </div>
        </a>
        </li>
    </ul>
    </div>
  )
}

export default ReadONlyTabs