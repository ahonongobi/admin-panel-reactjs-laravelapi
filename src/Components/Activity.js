import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css'

export default class Activity extends Component {
  render() {
    return (
      <div>
          <div className="activity">
                <div className="title">
                    <i className="uil uil-clock-three"></i>
                    <span className="text">Recent Activity</span>
                </div>

                <div className="activity-data d-none">
                    <tbody>

                    </tbody>
                    <div className="data names">
                        <span className="data-title">Name</span>
                        <span className="data-list">Prem Shahi</span>
                        <span className="data-list">Deepa Chand</span>
                        <span className="data-list">Manisha Chand</span>
                        <span className="data-list">Pratima Shahi</span>
                        
                    </div>
                    <div className="data email">
                        <span className="data-title">Email</span>
                        <span className="data-list">premshahi@gmail.com</span>
                        <span className="data-list">deepachand@gmail.com</span>
                        <span className="data-list">prakashhai@gmail.com</span>
                        <span className="data-list">manishachand@gmail.com</span>
                        
                    </div>
                    <div className="data joined">
                        <span className="data-title">Joined</span>
                        <span className="data-list">2022-02-12</span>
                        <span className="data-list">2022-02-12</span>
                        <span className="data-list">2022-02-13</span>
                        <span className="data-list">2022-02-13</span>
                        
                    </div>
                    <div className="data type">
                        <span className="data-title">Type</span>
                        <span className="data-list">New</span>
                        <span className="data-list">Member</span>
                        <span className="data-list">Member</span>
                        <span className="data-list">New</span>
                        
                    </div>
                    <div className="data status">
                        <span className="data-title">Status</span>
                        <span className="data-list">Liked</span>
                        <span className="data-list">Liked</span>
                        <span className="data-list">Liked</span>
                        <span className="data-list">Liked</span>
                        
                    </div>
                    <div className="data status">
                        <span className="data-title">Action</span>
                        <span className="data-list">Messaged</span>
                        <span className="data-list">Liked</span>
                        <span className="data-list">Liked</span>
                        <span className="data-list">Liked</span>
                       
                    </div>
                </div>

                
            </div>
      </div>
    )
  }
}
