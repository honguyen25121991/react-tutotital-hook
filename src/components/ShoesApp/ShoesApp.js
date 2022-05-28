import axios from "axios";
import React, { Component } from "react";
import "./ShoesApp.scss";

export default class ShoesApp extends Component {
  state = {
    data: [],
    name: "",
    isLoading: true,
  };
  async componentDidMount() {
    await axios.get("http://svcy3.myclass.vn/api/Product").then((response) => {
      console.log(response.data.content[0].name);
      this.setState({
        name: response.data.content[6].name,
        data: response.data.content,
        isLoading: false,
      });
    });
  }

  render() {
    return (
      <div className="container">
        ShoesApp
        <div>name {this.state.name}</div>
      </div>
    );
  }
}
