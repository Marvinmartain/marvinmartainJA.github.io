
import { useState } from 'react';

function Form({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      handleSearch(searchTerm);
      setSearchTerm("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for news articles"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
  
  export default Form;