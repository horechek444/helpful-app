import React from "react";
import ListItem from "../ListItem/ListItem";

const Garment = ({values}) => {
  return (
    <ul className={"garment"}>
      {values.map((value) => (
        <ListItem className={"garment__item"} key={value.toString()} value={value} />
      ))}
    </ul>
  );
};

export default Garment;
