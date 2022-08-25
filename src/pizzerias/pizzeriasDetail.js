import React, { Component } from "react";
import axios from "axios";
import PizzaUpdate from "./pizzaUpdate";

class PizzaDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.updatePizzeriaDetails = this.updatePizzeriaDetails.bind(this);
    this.deletePizzeria = this.deletePizzeria.bind(this);
  }

  updatePizzeriaDetails() {
    this.setState({ showComponent: true });
  }

  deletePizzeria(obj) {
    console.log(obj);
    axios
      .delete("http://127.0.0.1:8000/api".concat(obj))
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const data = this.props.pizzaDetail;
    return (
      <div style={{ color: "yellow", border: "1px solid yellow" }}>
        <p>{data.pizzeria_name}</p>
        <p>
          Address: {data.street}, {data.city}, {data.state}, {data.zip_code}
        </p>
        <p>Phone Number:- {data.phone_number}</p>
        <p>{data.description}</p>
        <button
          style={{ backgroundColor: "white" }}
          onClick={() => this.updatePizzeriaDetails()}
        >
          Update
        </button>
        <button
          style={{ backgroundColor: "white" }}
          onClick={() => this.deletePizzeria(data.delete)}
        >
          Delete
        </button>
        {this.state.showComponent ? (
          <PizzaUpdate pizzariaUpdate={data} />
        ) : null}
      </div>
    );
  }
}

export default PizzaDetail;
