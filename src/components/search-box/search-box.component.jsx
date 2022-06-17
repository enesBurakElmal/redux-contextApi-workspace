import React from 'react'

const SearchBox = ({ searchChange }) => {
  return (
    <>
      <input
        className="searchInput"
        type="text"
        name="name"
        placeholder="Search"
        onChange={searchChange}
      />
    </>
  )
}

export default SearchBox
