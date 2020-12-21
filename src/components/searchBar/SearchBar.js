import React ,{useState} from 'react';
import './SearchBar.css';

function SearchBar({setLocationHandler}) {

    const handleClick = () => {
        setLocationHandler(query);
    }
    function keyPressCheck(e) {
        if(e.keyCode === 13){
            setLocationHandler(query);
        }
    }
    const [query,setQuery] = useState("");
  return (
    <span className="searchbar">
      <input
        type="text"
        name="search"
        placeholder="Zoek een stad in Nederland"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={keyPressCheck}
      />

      <button onClick= {handleClick} type="button">
        Zoek
      </button>
    </span>
  );
};

export default SearchBar;
