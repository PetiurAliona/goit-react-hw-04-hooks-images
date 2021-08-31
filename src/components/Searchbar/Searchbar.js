import React, { useState } from "react"

import PropTypes from "prop-types"

import styled from "./Searchbar.module.css"
import { toast } from "react-toastify"

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const onHandleInputChange = (e) => {
    setSearchQuery(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim() === "") {
      return toast.error("Please enter the date")
    }
    onSubmit(searchQuery)
    setSearchQuery("")
  }

  return (
    <header className={styled.Searchbar}>
      <form onSubmit={handleSubmit} className={styled.SearchForm}>
        <button type="submit" className={styled.SearchFormButton}>
          <span className={styled.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styled.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onHandleInputChange}
          value={searchQuery}
          name="searchQuery"
        />
      </form>
    </header>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}

export default Searchbar
