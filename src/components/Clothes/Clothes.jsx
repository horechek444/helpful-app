import React, {useState} from "react";
import "./Clothes.css";
import categories from "../../data";

const Clothes = () => {

  let keys = Array.from(categories.keys());
  let values = Array.from(categories.values());
  console.log(values);

  const handleClick = (index) => {
    console.log(values[index])
  }

  return (
    <ul className="category">
      {keys.map((key, index) => (
        <li className="category__item" key={`${key}`} onClick={() => handleClick(index)}>
          {key}
          <ul className="garment">
            {values[index].map((value) => (
              <li className="garment__item" key={`${value}`}>{value}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default Clothes;
