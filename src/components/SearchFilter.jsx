import React from "react";

const SearchFilter = ({ searchFilter, handleChange }) => {
  return (
    <div>
      <input
        name="search"
        type="search"
        value={searchFilter}
        onChange={handleChange}
        className="outline-none border px-4 py-2 rounded-md mb-2"
        placeholder="Search by Shoes name"
      />
    </div>
  );
};

export default SearchFilter;
