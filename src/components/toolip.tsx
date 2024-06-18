import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
      {children}
      {showTooltip && (
        <div
          role="tooltip"
          className="absolute z-10 inline-block ml-8 px-3 py-2 text-sm font-medium text-white opacity-55 bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700"
        >
          {text}
        </div>
      )}



    </div>
  );
};

export default Tooltip;
