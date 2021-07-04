import React from 'react'

import classes from './MealItem.module.css'

export default function Mealtem({ name, description, price }) {
  const mealPrice = `$${price.toFixed(2)}`

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div></div>
    </li>
  )
}
