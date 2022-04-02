import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Header from "./header";
import Table from "./Table";
import "./view.css";
export default class View extends Component {
  render() {
    return (
      <section className="dashboard col-md-12">
        <Header />
        <div className="dash-content">
          <div className="container bootstrap snippet">
            <div className="row">
              <div className="col-sm-10">
                <h1>User namesss</h1>
              </div>
              <div className="col-sm-2">
                <a href="/users" className="pull-right">
                  <img
                    title="profile image"
                    id="profile-img-tag"
                    className="img-circle img-responsive"
                    src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                {/*left col*/}
                <div className="text-center">
                  <img
                    id="profile-img-tag"
                    src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    className="avatar img-circle img-thumbnail"
                    alt="avatar"
                  />
                  <h6>Upload a different photo...</h6>
                  <input
                    type="file"
                    className="text-center center-block file-upload"
                  />
                </div>
                <br />
                <div className="panel panel-default">
                  <div className="panel-heading">
                    Website <i className="fa fa-link fa-1x" />
                  </div>
                  <div className="panel-body">
                    <a href="http://bootnipets.com">bootnipets.com</a>
                  </div>
                </div>
                <ul className="list-group">
                  <li className="list-group-item text-muted">
                    Activity <i className="fa fa-dashboard fa-1x" />
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Shares</strong>
                    </span>{" "}
                    125
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Likes</strong>
                    </span>{" "}
                    13
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Posts</strong>
                    </span>{" "}
                    37
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Followers</strong>
                    </span>{" "}
                    78
                  </li>
                </ul>
              </div>
              {/*/col-3*/}
              <div className="col-sm-9">
                <div className="tab-content">
                  <div className="tab-pane active" id="home">
                    <hr />
                    <form
                      className="form"
                      action="##"
                      method="post"
                      id="registrationForm"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6 col-xs-6">
                            <label htmlFor="first_name">
                              <h4>First name</h4>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="first_name"
                              id="first_name"
                              placeholder="first name"
                              title="enter your first name if any."
                            />
                          </div>
                          <div className="col-md-6 col-xs-6">
                            <label htmlFor="first_name">
                              <h4>Last name</h4>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="last_name"
                              id="last_name"
                              placeholder="Last name"
                              title="enter your first name if any."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6 col-xs-6">
                            <label htmlFor="first_name">
                              <h4>Country</h4>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="country"
                              id="country"
                              placeholder=" country"
                              title="enter your first name if any."
                            />
                          </div>
                          <div className="col-md-6 col-xs-6">
                            <label htmlFor="first_name">
                              <h4>job</h4>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="job"
                              id="job"
                              placeholder="job"
                              title="enter your first name if any."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6 col-xs-6">
                            <label htmlFor="first_name">
                              <h4>First name</h4>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="first_name"
                              id="first_name"
                              placeholder="first name"
                              title="enter your first name if any."
                            />
                          </div>
                          <div className="col-md-6 col-xs-6">
                            <label htmlFor="first_name">
                              <h4>First name</h4>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="first_name"
                              id="first_name"
                              placeholder="first name"
                              title="enter your first name if any."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6 col-xs-6">
                            <label htmlFor="first_name">
                              <h4>First name</h4>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="first_name"
                              id="first_name"
                              placeholder="first name"
                              title="enter your first name if any."
                            />
                          </div>
                          <div className="col-md-6 col-xs-6">
                            <label htmlFor="first_name">
                              <h4>First name</h4>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="first_name"
                              id="first_name"
                              placeholder="first name"
                              title="enter your first name if any."
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-xs-12">
                          <br />
                          <button class="btn btn-lg btn-success" type="submit">
                            <i class="fa fa-check"></i> Save
                          </button>
                          <button id="restbtn" class="btn btn-lg" type="reset">
                            <i class="uil uil-refresh"></i> Reset
                          </button>
                          <button class="btn btn-lg btn-danger" type="submit">
                            <i class="fa fa-times"></i> Delete
                          </button>
                          <button id="restbtn" class="btn btn-lg" type="reset">
                            <i class="uil uil-refresh"></i> E-mail notification
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*/tab-pane*/}
                </div>
                {/*/tab-pane*/}
              </div>
              {/*/tab-content*/}
            </div>
            {/*/col-9*/}
          </div>
          <Table />
        </div>
      </section>
    );
  }
}
