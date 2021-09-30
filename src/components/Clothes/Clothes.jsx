import React, {useState} from "react";
import "./Clothes.css";
import categories from "../../data";
import ListItem from "../ListItem/ListItem";
import Garment from "../Garment/Garment";

const Clothes = () => {
  const [showChild, setShowChild] = useState(null);
  const [keys, setKeys] = useState(Array.from(categories.keys()));
  const [values, setValues] = useState(Array.from(categories.values()));

  const handleClick = (index) => {
    setShowChild(index);
  }

  return (
    <ul className="category">
      {keys.map((key, index) => (
        <ListItem className={"category__item"}
                  key={key.toString()}
                  onClick={() => handleClick(index)}
                  value={key}
                  children={showChild === index ? <Garment values={values[index]} /> : null}
        />
      ))}
    </ul>
  )
}

export default Clothes;
