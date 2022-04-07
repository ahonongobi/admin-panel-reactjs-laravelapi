import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Modale from "./Modal";
import Header from "./header";
import Card from "./Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

toast.configure();
export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      show: false,
    };
  }
  componentDidMount() {
    this.getApiData();
    this.intervale = setInterval(() => {
      this.getApiData();
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.intervale);
  }
  getApiData() {
    const url = "http://localhost:8001/api/user";
    axios
      .get(url)
      .then((response) => {
        this.setState({
          contact: response.data,
        });
      })
      .catch((e) => console.log(e));
  }

  handleClickDelete = async (e, id) => {
    const thidClickFounda = e.currentTarget;
    thidClickFounda.innerText = "Deleting...";
    const res = await axios.delete(
      `http://localhost:8001/api/deletedata/${id}`
    );
    if (res.data.status === 200) {
      thidClickFounda.closest("tr").remove();
      toast.success("data deleted successfully");
    }
  };
  render() {
    return (
      <div className="">
        <section className="dashboard col-md-12">
          <Header />

          <div className="dash-content">
            <div className="wrap-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Verification</th>
                    <th>State</th>

                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.contact.map((contact, index) => (
                    <tr key={index}>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>

                      {contact.verification === 0 ? (
                        <td className="text-danger">Unverified</td>
                      ) : (
                        <td className="text-success">Verified</td>
                      )}
                      {contact.statut === 0 ? (
                        <td className="text-danger">Offline</td>
                      ) : (
                        <td className="text-success">Online</td>
                      )}

                      <tr>
                        <td>
                          <button
                            onClick={(e) =>
                              this.handleClickDelete(e, contact.id)
                            }
                            className="btn__1 uil uil-trash"
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <Link
                            to={`/edit/${contact.id}`}
                            className="btn__2 uil uil-edit"
                          >
                            Edit{" "}
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/view/${contact.id}`}
                            className="btn__3 uil uil-eye"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    </tr>
                  ))}
                </tbody>
              </table>
              {this.state.contact.length === 0 ? <h2 className="section-title">
                <Skeleton duration={1} count={6} height={30} width='100%' />
              </h2> : null}
              <Modale />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
