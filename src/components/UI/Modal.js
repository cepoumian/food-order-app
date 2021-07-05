import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>
}

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

const overlaysElement = document.getElementById('overlays')

export default function Modal({ children, onClose }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, overlaysElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, overlaysElement)}
    </Fragment>
  )
}
