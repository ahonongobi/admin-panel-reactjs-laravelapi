import React, { Component } from "react";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      count: 0,
      countContact: 0,
      countAll: 0,
    };
  }
  async componentDidMount() {
    const res = await axios.get("http://localhost:8001/api/apiCount");
    const res2 = await axios.get("http://localhost:8001/api/apiCountContact");
    const res3 = await axios.get("http://localhost:8001/api/countAll");

    if (res.data.status === 200) {
      this.setState({
        count: res.data.contact,
      });
      console.log(res.data.contact);
    } else {
      console.log(0);
    }

    res2.data.status === 200
      ? this.setState({ countContact: res2.data.contact })
      : console.log(0);
    res3.data.status === 200
      ? this.setState({ countAll: res3.data.contact })
      : console.log(0);
  }

  render() {
    const { count, countContact, countAll } = this.state;
    return (
      <div>
        <div className="overview">
          <div className="title">
            <i className="uil uil-tachometer-fast-alt"></i>
            <span className="text">Dashboard</span>
          </div>
          {/**<Skeleton count={5} />**/}

          <div className="boxes">
            {count ? (
              <div className="box box1">
                {/**<i className="uil uil-thumbs-up"></i> **/}
                <i className="uil uil-user"></i>
                <span className="text">Total Likes</span>
                <span className="number mt-3">{count}</span>
              </div>
            ) : (
              <h2 className="section-title">
                <Skeleton duration={1} count={3} height={30} width={400} />
              </h2>
            )}
            {countContact ? (
              <div className="box box2">
                <i className="uil uil-comments"></i>
                <span className="text">Contacts</span>
                <span className="number mt-3">{countContact}</span>
              </div>
            ) : (
              <h2 className="section-title">
                <Skeleton duration={1} count={3} height={30} width={400} />
              </h2>
            )}
            {countAll ? (
              <div className="box box3">
                <i className="uil uil-share"></i>
                <span className="text">Total Share</span>
                <span className="number mt-3">{countAll}</span>
              </div>
            ) : (
              <h2 className="section-title">
                <Skeleton duration={1} count={3} height={30} width={400} />
              </h2>
            )}
          </div>
        </div>
      </div>
    );
  }
}
