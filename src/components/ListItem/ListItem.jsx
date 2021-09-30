import React from "react";

const ListItem = ({className, onClick, value, children}) => {
  return (
    <li className={className} onClick={onClick}>
      {value}
      {children}
    </li>
  );
};

export default ListItem;
