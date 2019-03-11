import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from "react-router-dom";


class Addcontact extends Component {
    constructor(props) {
        super(props)

        this.state={name:"" ,phone : "" , email :""}
           }

      changehandle =(event)=> {

        this.setState({[event.target.name]: event.target.value})
      }

      postdata=(e)=> {
        if (!this.state.name.length || !this.state.phone.length || !this.state.email.length){
        
          alert("No empty input accepted")
          e.preventDefault() 
        }

        else {
        axios.post('/addcontact', { ...this.state} )
       .then((res)=>alert('Contact Added'))
        .catch(err => alert("cant send data")) 
              }}


  render() {
    return (

      <div className="contactadd"   >
      <h2 > Add a Contact </h2>
      <form  >
      <div className="form-group">
    <label for="exampleInputPassword1">Contact Name</label>
    <input type="text" name="name" className="form-control" id="exampleInputPassword1" placeholder="Enter Contact Name" onChange={this.changehandle}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Contact Phone Number</label>
    <input type="text" name="phone" className="form-control" id="exampleInputPassword1" placeholder="Enter Contact Phone Number"onChange={this.changehandle}/>
  </div>
  
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"onChange={this.changehandle}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
  <Link to ='/contactlist'> <button type="submit" className="btn btn-primary" onClick={this.postdata} > Submit</button> </Link>
</form>


      </div>
      
    );
  }
}

export default Addcontact ;