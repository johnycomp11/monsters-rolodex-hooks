import {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/searchbox.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      //array to store API request data. We do not change this array but create another var that saves the state state
      monsters: [],  
      //User search input. Var is in state so we can use it outside of return
      searchField: '',    
    };
    console.log('constructor');
  }

  //get API
  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }
      ));
  }
  //component that runs when event is trigger by onChange in search bar
  onSearchChange = (event) => {
    const searchField= event.target.value.toLocaleLowerCase();
    this.setState(() => {
      // Return updated searchField.
      return {searchField};
    });
  }

  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    // Keeps original array (monsters) untouched. An copy of monster w/ filter results as user inputs into search
    const filterMonsters = monsters.filter((monster) => {
      // monster data being searched is changed to all lower case and saved in searchField
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className='app-title'> Monsters Rolodex</h1>
        <SearchBox className = 'monsters-search-box' onChangeHandler = {onSearchChange} placeholder = 'Search Monsters'/>
        <CardList monsters = {filterMonsters}/>
      </div>
    );
  }
}

export default App;
