import React from "react";
import "./Clothes.css";
import categories from "../../data";
import ListItem from "../ListItem/ListItem";

const Clothes = () => {
  const objects = Object.fromEntries(categories);
  let keys = Array.from(categories.keys());
  // let values = Array.from(categories.values());

  const handleClick = (key) => {
    console.log(objects[key])
  }

  return (
    <ul className="category">
      {keys.map((key) => (
        <ListItem className={"category__item"} key={key.toString()} onClick={() => handleClick(key)} value={key} />
        //   <ul className="garment">
        //     {objects[key].map((value) => (
        //       <li className="garment__item" key={`${value}`}>{value}</li>
        //     ))}
        //   </ul>
      ))}
    </ul>
  )
}

export default Clothes;
