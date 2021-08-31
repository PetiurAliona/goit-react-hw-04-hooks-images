import React, { useState, useEffect } from "react"

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import styled from "./ImageGallery.module.css"

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import PropTypes from "prop-types"

import api from "../utills/ApiService"
import Button from "../Button/Button"
import LoaderSpinner from "../Loader/Loader"

const ImageGallery = ({ searchQuery }) => {
  const [arrImg, setArrImg] = useState([])
  const [loading, setLoading] = useState(false)

  const saveImages = () => {
    setLoading(true)
    const notifyError = () => toast.error("Images wasn`t found")

    api
      .fetchQuery()
      .then((res) => {
        if (!res.hits.length) notifyError()
        setArrImg((prevState) => [...prevState, ...res.hits])
      })

      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }

  const onLoadMoreClick = () => {
    api.incrementPage()
    saveImages()
  }

  useEffect(() => {
    if (!searchQuery) {
      return
    }
    setArrImg([])
    api.resetPage()
    api.searchQuery = searchQuery
    saveImages()
  }, [searchQuery])

  useEffect(() => {
    if (api.page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      })
    }
  }, [arrImg])

  return (
    <>
      <ul className={styled.ImageGallery}>
        {arrImg.map(({ webformatURL, tags, largeImageURL }, index) => (
          <ImageGalleryItem webformatURL={webformatURL} name={tags} key={index} largeImageURL={largeImageURL} />
        ))}
      </ul>
      {arrImg.length > 1 && !loading && <Button onBtnLoadClick={onLoadMoreClick} />}
      {loading && <LoaderSpinner />}
    </>
  )
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
}

export default ImageGallery
