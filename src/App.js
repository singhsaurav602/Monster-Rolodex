import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/Card-list";
import SearchBox from "./components/search-box/Search-box";
import { users } from "./utils/users";
// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = { monsters: [], searchText: "" };
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((monster) =>
    //     this.setState(
    //       () => {
    //         return { monsters: monster };
    //       }
    //       // ,() => console.log(this.state.monsters)
    //     )
    //   );
    this.setState(() => {
      return { monsters: users };
    });
  }

  onSearchChange = (e) => {
    const text = e.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchText: text };
      }
      // ,() => console.log(this.state)
    );
  };

  render() {
    const { monsters, searchText } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          value={searchText}
          className="monsters-search-box"
        />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
