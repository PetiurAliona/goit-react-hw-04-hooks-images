import React, { useState } from "react"
import { ToastContainer } from "react-toastify"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Searchbar from "./components/Searchbar/Searchbar"

const App = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <Searchbar onSubmit={setSearchQuery} />
      <ImageGallery searchQuery={searchQuery} />
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
