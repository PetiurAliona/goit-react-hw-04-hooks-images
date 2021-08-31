import React, { useState } from "react"

import PropTypes from "prop-types"

import styled from "./ImageGalleryItem.module.css"
import Modal from "../Modal/Modal"

const ImageGalleryItem = ({ webformatURL, largeImageURL, name }) => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal((prevState) => !prevState)
  }

  return (
    <li className={styled.ImageGalleryItem}>
      <img src={webformatURL} alt={name} className={styled.ImageGalleryItemImage} onClick={toggleModal} />
      {showModal && <Modal onClose={toggleModal} largeImageURL={largeImageURL} alt={name} />}
    </li>
  )
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  name: PropTypes.string,
}

export default ImageGalleryItem
