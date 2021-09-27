import React from "react";

const ListItem = ({className, onClick, value}) => {
  return (
    <li className={className} onClick={onClick}>{value}</li>
  );
};

export default ListItem;
