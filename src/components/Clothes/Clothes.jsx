import React, {useState} from "react";
import "./Clothes.css";
import ListItem from "../ListItem/ListItem";
import Garment from "../Garment/Garment";

const Clothes = ({keys, values}) => {
  const [showChild, setShowChild] = useState(null);

  const handleClick = (event) => {
    setShowChild(Number(event.target.id));
  };

  return (
    <ul className="category list" onClick={handleClick}>
      {keys.map((key, index) => (
        <ListItem className={"category__item list__item"}
                  key={key.toString()}
                  id={index}
                  value={key}
                  children={showChild === index ? <Garment values={values[index]} /> : null}
        />
      ))}
    </ul>
  )
}

export default Clothes;
