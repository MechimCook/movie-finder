import React from "react";
const Collapse = ({ collapsed, children, name}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  const style = {
    collapsed: {
      display: 'none'
    },
    expanded: {
      display: 'block'
    },
    buttonStyle: {
      display: 'block',
      width: '100%',
      backgroundColor: '#777',
      color: 'white',
      cursor: 'pointer',
      padding: '18px',
      border: 'none',
      outline: 'none'
    }
  };

  return (
    <div>
      <h5 style={style.buttonStyle} onClick={() => setIsCollapsed(!isCollapsed)}>
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
