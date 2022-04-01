import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Modale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country: "",
      city: "",
      job: "",
      contact: [],
      error: "",
      sucessMsg: false,
      inputMsg: [],
      show: false,
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }
  async handleFormSubmit(e) {
      
    e.preventDefault();
    document.getElementById("btn__save").innerText = "Saving...";
    document.getElementById("btn__save").disabled = true;

    let formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("country", this.state.country);
    formData.append("city", this.state.city);
    formData.append("job", this.state.job);

    const res = await axios({
      method: "POST",
      url: "http://localhost:8001/api/add",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });
    if (res.data.status === 200) {
      this.setState({
        name: "",
        email: "",
        country: "",
        city: "",
        job: "",
      });
      document.getElementById("btn__save").innerText = "SAVE";
      document.getElementById("btn__save").disabled = false;
      toast.success("New contact add successfully");
      //alert(res.data.message);
    } else {
      this.setState({
        inputMsg: res.data.errorMessages,
      });
    }
    /** axios({
      method: "POST",
      url: "http://localhost:8001/api/add",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function (response) {
        this.setState({
          inputMsg: response.data.errorMessages
        });

        console.log(response.data.errorMessages);
      })
      .catch((e) => console.log(e)); */
  }
  render() {
    return (
      <div>
        <a onClick={() => this.handleModal()} class="float">
          <i class="fa fa-plus my-float"></i>
        </a>
        <Modal show={this.state.show} onHide={() => this.handleModal()}>
          <Modal.Header closeButton>Add user details</Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group mt-3">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  value={this.state.name}
                  placeholder="Enter name"
                />
                <span className="text-danger">{this.state.inputMsg.name}</span>
              </div>
              <div className="form-group mt-3">
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  value={this.state.email}
                  placeholder="Enter e-mail"
                />
                <span className="text-danger">{this.state.inputMsg.email}</span>
              </div>
              <div className="form-group mt-3">
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  onChange={(e) => this.setState({ city: e.target.value })}
                  value={this.state.city}
                  placeholder="Enter city"
                />
                <span className="text-danger">{this.state.inputMsg.city}</span>
              </div>
              <div className="form-group mt-3">
                <input
                  className="form-control"
                  type="text"
                  name="country"
                  onChange={(e) => this.setState({ country: e.target.value })}
                  value={this.state.country}
                  placeholder="Enter country"
                />
                <span className="text-danger">
                  {this.state.inputMsg.country}
                </span>
              </div>
              <div className="form-group mt-3">
                <input
                  className="form-control"
                  type="text"
                  name="job"
                  onChange={(e) => this.setState({ job: e.target.value })}
                  value={this.state.job}
                  placeholder="Enter job"
                />
                <span className="text-danger">{this.state.inputMsg.job}</span>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn__close" onClick={() => this.handleModal()}>
              Close
            </Button>
            <Button
            id="btn__save"
              className="btn__save"
              onClick={(e) => this.handleFormSubmit(e)}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
