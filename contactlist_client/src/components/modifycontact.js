import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from "react-router-dom";


class Modifycontact extends Component {
    constructor(props) {
        super(props)

        this.state={name:this.props.edit.name , phone : this.props.edit.phone , email :this.props.edit.email}
           }

      changehandle =(event)=> {

        this.setState({[event.target.name]: event.target.value})
      }

      updatecontact=()=> {
        axios.put (`/modifycontact/${this.props.edit._id}`, {...this.state} )
             .then((res)=>alert('Contact Modified'))
             .catch(err=> console.log(err)) 
              }
      

  render() {
    return (

      <div className="contactadd"   >
      <h2 > Update Contact </h2>
      <form  >
      <div className="form-group">
    <label for="exampleInputPassword1">Contact Name</label>
    <input type="text" name="name" value={this.state.name} className="form-control" id="exampleInputPassword1" placeholder="Enter Contact Name" onChange={this.changehandle} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Contact Phone Number</label>
    <input type="text" name="phone" value={this.state.phone} className="form-control" id="exampleInputPassword1" placeholder="Enter Contact Phone Number" onChange={this.changehandle}/>
  </div>
  
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" value={this.state.email}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.changehandle}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
  <Link to ='/contactlist'> <button type="submit" className="btn btn-primary" onClick={this.updatecontact} > Edit </button> </Link>
</form>


      </div>
      
    );
  }
}

export default Modifycontact ;