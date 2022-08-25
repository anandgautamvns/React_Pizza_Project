import React, { Component } from "react";
import axios from "axios";
import PizzaDetail from "./pizzeriasDetail";
import PizzaForm from "./pizzeriasForm";

class PizzaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzeriasData: [],
      pizzeria: " ",
      showComponent: false,
    };
    // this.getPizzaDetail = this.getPizzaDetail.bind(this);
    // this.showPizzeriaDetails = this.showPizzeriaDetails.bind(this);
  }

  getPizzaDetail(item) {
    axios
      .get("http://127.0.0.1:8000".concat(item.absolute_url))
      .then((response) => {
        this.setState({ pizzeria: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  showPizzeriaDetails(item) {
    this.getPizzaDetail(item);
    this.setState({ showComponent: true });
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/")
      .then((response) => {
        this.setState({ pizzeriasData: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h2>Pizza Name goes hear</h2>
        <div>
          <PizzaForm />
        </div>
        {this.state.pizzeriasData.map((item, key) => {
          return (
            <h3 key={key} onClick={() => this.showPizzeriaDetails(item)}>
              {item.pizzeria_name}, {item.city}
            </h3>
          );
        })}
        {this.state.showComponent ? (
          <PizzaDetail pizzaDetail={this.state.pizzeria} />
        ) : null}
      </div>
    );
  }
}

export default PizzaList;
