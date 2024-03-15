import { Component } from "react";
import "./Card-list.styles.css";
import Card from "../card/Card";

class CardList extends Component {
  render() {
    const { filteredMonsters } = this.props;
    return (
      <div className="card-list">
        {filteredMonsters.map((monster) => {
          const { name, email, id } = monster;
          return <Card key={id} name={name} email={email} id={id} />;
        })}
      </div>
    );
  }
}

export default CardList;
