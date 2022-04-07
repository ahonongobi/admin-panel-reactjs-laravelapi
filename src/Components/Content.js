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
import $ from "jquery";

toast.configure();
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      show: false,
      currentPage: 1,
      todosPerPage: 8,

      //second with next and prev page
      upperPageBound: 3,
      lowerPageBound: 0,
      isPrevBtnActive: "disabled",
      isNextBtnActive: "",
      pageBound: 3,
    };
    this.handleClick = this.handleClick.bind(this);
    //second with next and prev page
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnPrevClick = this.btnPrevClick.bind(this);
    this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
  }
  handleClick(event) {
    let listid = Number(event.target.id);
    this.setState({
      currentPage: listid,
    });
    $("ul li.active").removeClass("active");
    $("ul li#" + listid).addClass("active");
    this.setPrevAndNextBtnClass(listid);
  }

  setPrevAndNextBtnClass(listid) {
    let totalPage = Math.ceil(
      this.state.contact.length / this.state.todosPerPage
    );
    this.setState({ isNextBtnActive: "disabled" });
    this.setState({ isPrevBtnActive: "disabled" });
    if (totalPage === listid && totalPage > 1) {
      this.setState({ isPrevBtnActive: "" });
    } else if (listid === 1 && totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
    } else if (totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
      this.setState({ isPrevBtnActive: "" });
    }
  }
  btnIncrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound,
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
    });
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnDecrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound,
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnPrevClick() {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
      });
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnNextClick() {
    if (this.state.currentPage + 1 > this.state.upperPageBound) {
      this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
      });
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  componentDidUpdate() {
    $("ul li.active").removeClass("active");
    $("ul li#" + this.state.currentPage).addClass("active");
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
    const {
      contact,
      currentPage,
      todosPerPage,
      upperPageBound,
      lowerPageBound,
      isPrevBtnActive,
      isNextBtnActive,
    } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = contact.slice(indexOfFirstTodo, indexOfLastTodo);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(contact.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      if (number === 1 && currentPage === 1) {
        return (
          <li key={number} className="active" id={number}>
            <a href="#" id={number} onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      } else if (number < upperPageBound + 1 && number > lowerPageBound) {
        return (
          <li key={number} id={number}>
            <a href="#" id={number} onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      }
    });
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = (
        <li className="">
          <a href="#" onClick={this.btnIncrementClick}>
            {" "}
            &hellip;{" "}
          </a>
        </li>
      );
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = (
        <li className="">
          <a href="#" onClick={this.btnDecrementClick}>
            {" "}
            &hellip;{" "}
          </a>
        </li>
      );
    }
    let renderPrevBtn = null;
    if (isPrevBtnActive === "disabled") {
      renderPrevBtn = (
        <li className={isPrevBtnActive}>
          <span id="btnPrev"> Prev </span>
        </li>
      );
    } else {
      renderPrevBtn = (
        <li className={isPrevBtnActive}>
          <a href="#" id="btnPrev" onClick={this.btnPrevClick}>
            {" "}
            Prev{" "}
          </a>
        </li>
      );
    }
    let renderNextBtn = null;
    if (isNextBtnActive === "disabled") {
      renderNextBtn = (
        <li className={isNextBtnActive}> 
        {" "}
          <span className="diseabled_" id="btnNext"> Next </span>
        </li>
      );
    } else {
      renderNextBtn = (
        <li className={isNextBtnActive}>
          <a href="#" id="btnNext" onClick={this.btnNextClick}>
            {" "}
            Next{" "}
          </a>
        </li>
      );
    }
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
                  {currentTodos.map((contact, index) => (
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

              {this.state.contact.length === 0 ? (
                <h2 className="section-title">
                  <Skeleton duration={1} count={6} height={30} width="100%" />
                </h2>
              ) : null}
              <ul id="page-numbers" className="pagination d-flex justify-content-center mt-5">
                {renderPrevBtn}
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                {renderNextBtn}
              </ul>
              
              <Modale />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
