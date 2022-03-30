import React, { Component } from "react";
import Activity from "./Activity";
import Card from "./Card";
import Table from "./Table";
import Header from "./header"
export default class List extends Component {
  render() {
    return (
      <section className="dashboard col-md-12">
        <Header />

        <div className="dash-content">
          <Card />

          <Activity />
          
        </div>
       <Table />
      </section>
    );
  }
}
