import { useState } from 'react'

function Item({ name, category }) {
  
  const [isCarted, setCarted] = useState(false)

  const handleCartClick = () => {
    setCarted(!isCarted)
  }

  return (
    <li className={isCarted ? "in-cart" : ""} onClick={handleCartClick} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isCarted ? "remove" : "add"}>{isCarted ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
