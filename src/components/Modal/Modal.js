import React, { useState } from "react"
import { createPortal } from "react-dom"
import styled from "./Modal.module.css"
import PropTypes from "prop-types"

const modalRoot = document.querySelector("#modal")

const Modal ({ onClose, largeImageURL, alt }) => {
  
  // componentDidMount() {
  //   window.addEventListener("keydown", this.closeModalEsc)
  //   const body = document.querySelector("body")
  //   body.style.overflow = "hidden"
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("keydown", this.closeModalEsc)
  //   const body = document.querySelector("body")
  //   body.style.overflow = ""
  // }

  

  const closeModalEsc = (e) => {
    if (e.code === "Escape") this.props.onClose()
  }

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) this.props.onClose()
  }
 
    return createPortal(
      <div className={styled.Overlay} onClick={onOverlayClick}>
        <div className={styled.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      modalRoot
    )
  
}

export default Modal

// class Modal extends Component {
//   static propTypes = {
//     onClose: PropTypes.func,
//     largeImageURL: PropTypes.string,
//     tags: PropTypes.string,
//   }

//   componentDidMount() {
//     window.addEventListener("keydown", this.closeModalEsc)
//     const body = document.querySelector("body")
//     body.style.overflow = "hidden"
//   }
//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.closeModalEsc)
//     const body = document.querySelector("body")
//     body.style.overflow = ""
//   }

//   closeModalEsc = (e) => {
//     if (e.code === "Escape") this.props.onClose()
//   }

//   onOverlayClick = (e) => {
//     if (e.target === e.currentTarget) this.props.onClose()
//   }

//   render() {
//     const { largeImageURL, tags } = this.props
//     return createPortal(
//       <div className={styled.Overlay} onClick={this.onOverlayClick}>
//         <div className={styled.Modal}>
//           <img src={largeImageURL} alt={tags} />
//         </div>
//       </div>,
//       modalRoot
//     )
//   }
// }

// export default Modal
