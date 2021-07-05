import React, { useContext } from 'react'

import MealItemForm from './MealItemForm'
import cartContext from '../../../store/cart-context'
import classes from './MealItem.module.css'

export default function MealItem({ name, description, price, id }) {
  const { addItem } = useContext(cartContext)

  const mealPrice = `$${price.toFixed(2)}`

  const addToCartHandler = (amount) => {
    addItem({
      id,
      name,
      amount,
      price,
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}
