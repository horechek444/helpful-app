import React from "react";
import "./Garment.css";
import ListItem from "../ListItem/ListItem";

const Garment = ({values}) => {
  return (
    <ul className={"garment list"}>
      {values.map((value) => (
        <ListItem className={"garment__item list__item"} key={value.toString()} value={value} />
      ))}
    </ul>
  );
};

export default Garment;
