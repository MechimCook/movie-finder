import React from "react";
const Collapse = ({ collapsed, children, name}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  const style = {
    collapsed: {
      display: 'none'
    },
    expanded: {
      display: 'block'
    }
  };

  return (
    <div>
      <h5 className="buttonStyle w-100" onClick={() => setIsCollapsed(!isCollapsed)}>
      {name}
      </h5>
      <div
        className="collapse-content"
        style={isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </div>
  );
};
export default Collapse;
