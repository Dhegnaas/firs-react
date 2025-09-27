import React from "react";

const Search = ({ searchTerm, setSearchTerm, icon }) => {
  return (
    <div className="search flex items-center gap-2 bg-white rounded-md px-3 py-2">
      {icon && (
        <img
          src={icon}
          alt="search"
          className="w-5 h-5 opacity-70"
        />
      )}
      <input
        type="text"
        placeholder="Search through thousands of movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 outline-none bg-transparent text-black placeholder-gray-500"
      />
    </div>
  );
};

export default Search;
