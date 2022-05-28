import axios from "axios";
import { useState } from "react";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const handleSearchBtn = () => {
    alert(keyword);
  };
  return (
    <div className="weather-app-container">
      <input
        type="text"
        placeholder="Search any city..."
        className=""
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button onClick={() => handleSearchBtn()}>Seacth</button>
      <div className="result">
        <div className="title"></div>
        <div className="type"></div>
        <div className="woeid"></div>
        <div className="latt_long"></div>
      </div>
    </div>
  );
};

export default Search;
