import React, { Component } from 'react'
import "./Login.css"
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:"",
            keep: "",
            isOK: false,
        }
        
        
    }
    
    async handleFormSubmit(e) {
        e.preventDefault();
        document.getElementById("submit").innerText = "Your are redirecting...";
        document.getElementById("submit").disabled = true;

        let formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        
    
        const res = await axios({
          method: "POST",
          url: "http://localhost:8001/api/login",
          data: formData,
          config: { headers: { "Content-Type": "multipart/form-data" } }
        });
        if (res.data.status === 200) {
          
          
          this.redirectToDashboard()          
         // toast.success("New contact add successfully"); Sign In
          //this.props.history.push({pathname: '/',state:'aret'})
        } else {
          this.setState({
            inputMsg: res.data.errorMessages
          });
          toast.warning("E-mail or Password incorrect");
          document.getElementById("submit").innerText = "Sign In";
          document.getElementById("submit").disabled = false;
        }
        
      }
      redirectToDashboard = ()=>{
         
       
        //this.props.history.push({pathname: '/'})
        /**this.props.history(
            '/',
            {state: {email: this.state.email}},
        ) **/
        
        setTimeout(() => {window.location.href = "/";} , 2000);
        localStorage.setItem('email', this.state.email);
        localStorage.setItem('token', true);
        console.log(this.state.email);
   }
   
  render() {
      
    return (
        <div className="login-wrap mt-5">
            
        
        <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Sign Up</label>
            <div className="login-form">
                <div className="sign-in-htm">
                    <div className="group">
                        <label htmlFor="user" className="label">E-mail</label>
                        <input  type="email" name='email'  value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})} className="input" />
                        
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label">Password</label>
                        <input  type="password" name='password'  value={this.state.password} onChange={(e)=> this.setState({password: e.target.value})}  className="input" data-type="password" />
                        
                    </div>
                    <div className="group">
                        <input onChange={(e)=> this.setState({keep: e.target.value})}  id="check" type="checkbox" className="check" checked />
                        <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                    </div>
                    <div className="group">
                        <button type="submit" id='submit' onClickCapture={(e)=>this.handleFormSubmit(e)} className="button">Sign In</button> 
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                        <a href="#forgot">Forgot Password?</a>
                    </div>
                </div>
                {/**<div className="sign-up-htm">
                    <div className="group">
                        <label for="user" className="label">Username</label>
                        <input id="user" type="text" className="input" />
                    </div>
                    <div className="group">
                        <label for="pass" className="label">Password</label>
                        <input id="pass" type="password" className="input" data-type="password" />
                    </div>
                    <div className="group">
                        <label for="pass" className="label">Repeat Password</label>
                        <input id="pass" type="password" className="input" data-type="password" />
                    </div>
                    <div className="group">
                        <label for="pass" className="label">Email Address</label>
                        <input id="pass" type="text" className="input" />
                    </div>
                    <div className="group">
                        <input type="submit" className="button" value="Sign Up" />
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                        <label for="tab-1">Already Member?</label>
                    </div>
                </div> **/}
            </div>
        </div>
        
    </div>
      
    )
  }
}
export default (props)=>(<Login history={useNavigate()}/>)
