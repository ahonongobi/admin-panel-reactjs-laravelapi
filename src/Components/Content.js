import React, { Component } from "react";
import Card from "./Card";
import List from "./List";
import Header from "./header";
export default class Content extends Component {
  render() {
    return (
      <div className="">
        <section className="dashboard col-md-12">
          <Header />

          <div className="dash-content">
            <Card />
          </div>
        </section>
      </div>
    );
  }
}
