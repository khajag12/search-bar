import SearchBar from "./searchBar";
import SearchResults from "./searchResults";
import React,{ useState } from 'react';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dummyData = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Kiwi',
    'Lemon',
    'Mango',
    'Orange',
    'Peach',
    'Pear',
    'Quince',
    'Raspberry',
    'Strawberry',
    'Tomato',
    'Watermelon',
  ];

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (query) => {
    const filteredResults = dummyData.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Search fruits</h1>
      <SearchBar onSearch={handleSearch} />
      
      <SearchResults results={searchResults} query={searchText} />
    </div>
  );
}

export default App;