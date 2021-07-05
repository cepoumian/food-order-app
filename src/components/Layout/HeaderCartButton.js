import React, { useContext, useEffect, useState } from 'react'

import CartIcon from '../Cart/CartIcon'
import cartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

export default function HeaderCartButton({ onClick }) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const { items } = useContext(cartContext)

  const cartItemsAmount = items.reduce((currAmount, item) => {
    return currAmount + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }

    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsAmount}</span>
    </button>
  )
}
