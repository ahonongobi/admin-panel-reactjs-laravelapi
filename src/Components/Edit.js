import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import Header from "./header";
import { useParams } from "react-router-dom";
import "./form.css";
import swal from "sweetalert";
import { toast } from "react-toastify";
toast.configure();

class Edit extends Component {
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
    };
  }
  //get data from database
  async componentDidMount() {
    const { id } = this.props.params;

    const res = await axios.get(`http://localhost:8001/api/edit/${id}`);
    if (res.data.status === 200) {
      this.setState({
        name: res.data.contact.name,
        email: res.data.contact.email,
        country: res.data.contact.country,
        city: res.data.contact.city,
        job: res.data.contact.job,
      });
    }
  }
  async handleFormSubmit(e) {
    e.preventDefault();
    document.getElementById("sumitbtn").innerText = "Updating...";
    document.getElementById("sumitbtn").disabled = true;
    let formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("country", this.state.country);
    formData.append("city", this.state.city);
    formData.append("job", this.state.job);
    const { id } = this.props.params;
    const res = await axios({
      method: "PUT",
      url: `http://localhost:8001/api/edit-contact/${id}`,
      data: this.state,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });
    if (res.data.status === 200) {
      document.getElementById("sumitbtn").innerText = "Edit contact";
      document.getElementById("sumitbtn").disabled = false;
      toast.success("Data has successfully updated");
      swal({
        title: "Success!",
        text: "Data has successfully updated!",
        icon: "success",
        button: "Close",
      });
      
      //alert(res.data.message);
    } else {
      this.setState({
        inputMsg: res.data.errorMessages,
      });
    }
  }
  render() {
    const { name, email, country, city, job } = this.state;
    return (
      <section className="dashboard col-md-12">
        <Header />

        <div className="dash-content">
          <Card />
          <center>
            <div className="card-content">
              <div className="card-header">
                <h2>Edit datas</h2>
              </div>

              <div className="card-body">
                <form>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                    value={name}
                    placeholder="name"
                  />
                  <i className="far fa-user"></i>

                  <input
                    type="text"
                    name="password"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    value={email}
                    placeholder="E-mail"
                  />
                  <i className="fas fa-envelope"></i>

                  <input
                    type="text"
                    name="country"
                    onChange={(e) => this.setState({ country: e.target.value })}
                    value={country}
                    placeholder="Country"
                  />
                  <i className="fas fa-flag"></i>
                  <input
                    type="text"
                    name="city"
                    onChange={(e) => this.setState({ city: e.target.value })}
                    value={city}
                    placeholder="city"
                  />
                  <i className="fas fa-city"></i>
                  <input
                    type="text"
                    name="job"
                    onChange={(e) => this.setState({ job: e.target.value })}
                    value={job}
                    placeholder="job"
                  />
                  <i className="fas fa-tasks"></i>
                  <a href="#">
                    <i id="password" class="far fa-eye"></i>
                  </a>
                  <button
                    id="sumitbtn"
                    onClick={(e) => this.handleFormSubmit(e)}
                    type="button"
                  >
                    Edit
                  </button>
                </form>
              </div>
            </div>
          </center>
        </div>
      </section>
    );
  }
}
export default (props) => <Edit {...props} params={useParams()} />;
