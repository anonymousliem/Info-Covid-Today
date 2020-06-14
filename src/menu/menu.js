import React, { Component } from 'react'
import '../index.css'
// eslint-disable-next-line no-unused-vars
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
export default class menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role : localStorage.getItem("Role")
        };
      }

    render() {
        return (
            <div>
        <div>
        <ul>
<li><Link to="/covid">Home</Link></li>
<li><Link to="/aboutus">About Us</Link></li>
  {/* <li><Link to="/account">Account</Link></li>
  <li><Link to="/note">Note</Link></li>
  <li><Link to="/allnotes">All Notes</Link></li>
  <li><Link to="/logout">Logout</Link></li> */}
  
</ul> 
        </div>
       
            </div>
        )
    }
}
