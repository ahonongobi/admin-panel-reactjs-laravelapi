import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

 function SearchBar({ placeholder, key }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

    async function handleFilter(event){
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    console.log(searchWord);
    let result = await fetch('http://localhost:8001/api/search/'+searchWord)
    result = await result.json()
    //const newFilter = data.filter((value) => {
     // return value.title.toLowerCase().includes(searchWord.toLowerCase());
    //});
    

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(result);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="search-box">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            
            <i className="uil uil-search"></i>
          ) : (
            <i id="clearBtn" onClick={clearInput} className="uil uil-times"></i>
            
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.id} target="_blank">
                <p>{value.name} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;