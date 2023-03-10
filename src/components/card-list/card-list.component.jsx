import { Component } from "react";
import Card from "../card/card.component";

import "./card-list.style.css";
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    // console.log("render from cardlist");
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
