import React, { useEffect } from "react"
import { createPortal } from "react-dom"
import styled from "./Modal.module.css"
import PropTypes from "prop-types"

const modalRoot = document.querySelector("#modal")

const Modal = ({ onClose, largeImageURL, tags }) => {
  const closeModalEsc = (e) => {
    if (e.code === "Escape") {
      onClose()
    }
  }

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", closeModalEsc)
    const body = document.querySelector("body")
    body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", closeModalEsc)
      const body = document.querySelector("body")
      body.style.overflow = ""
    }
  })

  return createPortal(
    <div className={styled.Overlay} onClick={onOverlayClick}>
      <div className={styled.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>,
    modalRoot
  )
}

Modal.propTypes = {
  onClose: PropTypes.func,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
}

export default Modal
