import React, { useContext } from 'react'

import Modal from '../UI/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import cartContext from '../../store/cart-context'

export default function Cart({ onClose }) {
  const { items, totalAmount, addItem, removeItem } = useContext(cartContext)
  const formattedTotal = `$${totalAmount.toFixed(2)}`
  const hasItems = items.length > 0

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 })
  }
  const cartItemRemoveHandler = (id) => {
    removeItem(id)
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={() => cartItemAddHandler(item)}
          onRemove={() => cartItemRemoveHandler(item.id)}
        />
      ))}
    </ul>
  )

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{formattedTotal}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}
