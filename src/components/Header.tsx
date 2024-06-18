import React, { useEffect, useState } from 'react';

const HeaderComponent = () => {
    const [isHidden, setIsHidden] = useState(true); // State to track if header should be hidden

    useEffect(() => {
      let lastScrollTop = 4000;
      const handleScroll = () => {
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
        // console.log(window.scrollY)
        // Determine scroll direction
        if (currentScrollTop < lastScrollTop) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (

    <div className={`z-30 h-16 w-full px-2 text-white lg:px-0 fixed inset-x-0 top-0 bg-black shadow-md ${isHidden ? '-translate-y-full' : 'translate-y-0'} transition-transform duration-300 ease-in-out`}>
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        {/* Left Container */}
        <section data-testid="left-container" className="flex h-16 flex-1 items-center justify-start">
          <div className="relative">
            <div className="flex w-max items-center">
              <a href="https://home.mindvalley.com/programs" className="flex w-max items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-white">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.8839 4.11612C12.3957 3.62796 11.6043 3.62796 11.1161 4.11612L4.11612 11.1161C3.62796 11.6043 3.62796 12.3957 4.11612 12.8839L11.1161 19.8839C11.6043 20.372 12.3957 20.372 12.8839 19.8839C13.372 19.3957 13.372 18.6043 12.8839 18.1161L8.01777 13.25H19C19.6904 13.25 20.25 12.6904 20.25 12C20.25 11.3096 19.6904 10.75 19 10.75H8.01777L12.8839 5.88388C13.372 5.39573 13.372 4.60427 12.8839 4.11612Z" fill="currentColor"></path>
                </svg>
                <span className="hidden md:inline"> Back to Programs</span>
              </a>
            </div>
            <div className="tooltip-content absolute w-auto overflow-visible whitespace-nowrap rounded bg-black px-2 py-1 text-sm leading-6 text-white opacity-0" style={{ left: '6px' }}>
              Back to all programs
            </div>
          </div>
        </section>

        {/* Middle Container */}
        <span className="flex w-full flex-1 flex-col text-center font-semibold">
          <div className="title-bold-11"> Getting Started with Mindvalley </div>
        </span>

        {/* Right Container */}
        <section data-testid="right-container" className="flex h-16 w-20 flex-1 items-center justify-end">
          <div className="mr-2 md:mr-7">
            <div className="relative">
              <div className="h-10 items-center flex"></div>
              <div className="tooltip-content absolute w-auto overflow-visible whitespace-nowrap rounded bg-black px-2 py-1 text-sm leading-6 text-white opacity-0">
                Favorite Quest
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="tooltip-content absolute w-auto overflow-visible whitespace-nowrap rounded bg-black px-2 py-1 text-sm leading-6 text-white opacity-0">
              Options
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeaderComponent;
