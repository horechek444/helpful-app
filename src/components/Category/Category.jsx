import React from "react";
import ListItem from "../ListItem/ListItem";

const Category = ({keys, values, name, subname, onClick, showChild}) => {


  return (
    <ul className={`${name}__list list`} onClick={onClick}>
      {keys.map((key, index) => (
        <ListItem className={`${name}__item list__item`}
                  key={key.toString()}
                  id={index}
                  value={key}
                  children={showChild === index ? <Category name={subname} keys={values[index]} /> : null}
        />
      ))}
    </ul>
  )
}

export default Category;
