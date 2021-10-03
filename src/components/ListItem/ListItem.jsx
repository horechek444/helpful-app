import React from "react";

const ListItem = ({className, onClick, value, children, id}) => {
  return (
    <li className={className} onClick={onClick} id={id}>
      {value}
      {children}
    </li>
  );
};

export default ListItem;
