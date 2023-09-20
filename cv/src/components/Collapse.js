import React from "react";

const Collapse = ({ collapsed, headerName, children }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <>
      <button
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? `${headerName}` : `${headerName}`}
      </button>
      <div
        className={`collapse-content ${isCollapsed ? "collapsed" : "expanded"}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  );
};

export default Collapse;
