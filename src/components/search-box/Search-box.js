import { Component } from "react";
import "./Search-box.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        className={`search-box ${this.props.className}`}
        value={this.props.value}
        placeholder="Search Monsters"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
