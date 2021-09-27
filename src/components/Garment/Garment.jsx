import React from "react";

const Garment = ({isGarmentShow, objects, key}) => {
  return (
    <ul className={isGarmentShow ? "garment garment_active" : "garment"}>
      {/*{objects[key].map((value) => (*/}
      {/*  <li className="garment__item" key={`${value}`}>{value}</li>*/}
      {/*))}*/}
    </ul>
  );
};

export default Garment;
