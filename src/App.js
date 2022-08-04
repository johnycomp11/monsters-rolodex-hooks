import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/searchbox.component';
import './App.css';


const App = () => {
  const [searchField, setSearchField] = useState(''); //useState gives back and array 2 values. storeValue and setValue
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

//get API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
  });

  setFilterMonsters(newFilterMonsters);
}, [monsters, searchField]);

const onSearchChange = (event) => {
  const searchFieldString= event.target.value.toLocaleLowerCase();
  setSearchField(searchFieldString);
}

  return (
    <div className="App">
        <h1 className='app-title'> Monsters Rolodex </h1>
        <SearchBox 
        className = 'monsters-search-box' 
        onChangeHandler = {onSearchChange} 
        placeholder = 'Search Monsters'/>
        <CardList monsters = {filterMonsters}/>
      </div>
  )
}

export default App;
