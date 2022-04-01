import React, { Component } from "react";
import Activity from "./Activity";
import Card from "./Card";
import Table from "./Table";
import Header from "./header"
/*export default class List extends Component {
  render() {
    const {email} = (this.props.location && this.props.location.state)|| {}
    return (
      <section className="dashboard col-md-12">
        <Header />

        <div className="dash-content">
           <span>{email}</span>
          <Card />

          <Activity />
          
        </div>
       <Table />
      </section>
    );
  }
} **/


const List = (props) =>(
  <div>
 <section className="dashboard col-md-12">
        <Header />

        <div className="dash-content">
           {/**<span>{localStorage.getItem('email') && (
            <div>
               Email: <p>{localStorage.getItem('email')}</p>
            </div>
           )}</span> **/}
          <Card />

          <Activity />
          
        </div>
       <Table />
      </section>
  </div>
)
export default List

