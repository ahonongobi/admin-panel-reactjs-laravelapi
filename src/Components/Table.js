import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
    };
  }
  componentDidMount(){
    this.getApiData();
      this.intervale = setInterval(() => {
          this.getApiData()
      }, 1000);

      
  }
  componentWillUnmount(){
      clearInterval(this.intervale)
  }
  getApiData() {
    const url = "http://localhost:8001/api/add";
    axios.get(url).then((response) => {
      this.setState({
        contact: response.data,
      })
    }).catch((e) => console.log(e));
  }

  handleClickDelete = async (e,id) =>{
    const thidClickFounda = e.currentTarget;
    thidClickFounda.innerText = "Deleting...";
    const res = await axios.delete(
      `http://localhost:8001/api/deletedata/${id}`
    );
    if (res.data.status === 200) {
      thidClickFounda.closest("tr").remove();
      toast.success("data deleted successfully");
    }

  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Country</th>
            <th>City</th>
            <th>Job</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
            {this.state.contact.map((contact,index)=>(
                <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.country}</td>
                <td>{contact.city}</td>
                <td>{contact.job}</td>
                <tr>
                  <td>
                    <button onClick={(e)=> this.handleClickDelete(e,contact.id)} className="btn__1 uil uil-trash">Delete</button>
                  </td>
                  <td>
                    <button className="btn__2 uil uil-edit">Edit</button>
                  </td>
                  <td>
                    <button className="btn__3 uil uil-eye">View</button>
                  </td>
                </tr>
              </tr>
            ))}
          
        </tbody>
      </table>
    );
  }
}
