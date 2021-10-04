import React, {useState} from "react";
import "./Clothes.css";
import Category from "../Category/Category";

const Clothes = ({keys, values}) => {
  const [showChild, setShowChild] = useState(null);
  const handleClick = (event) => {
    setShowChild(Number(event.target.id));
  };

  return (
    <Category keys={keys}
              values={values}
              name={"clothes"}
              subname={"garment"}
              onClick={handleClick}
              showChild={showChild}
    />
  );
};

export default Clothes;
