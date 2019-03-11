import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from "react-router-dom";

class Contactlist extends Component {
    constructor(props) {
        super(props)
       this.state={contactlist:[]}
           }

   componentDidMount() {
      axios.get('/contactlist')
    .then(res=> this.setState({ contactlist: res.data }))
    .catch(err=> alert("contact cant be added")) 
          }

  removecontact=(id) => {

    axios.delete(`/removecontact/${id}`)
    .then(()=>alert("contact removed") )
    .catch(err=> alert("contact cant be removed")) 

          }

    componentDidUpdate() {
       axios.get('/contactlist')
            .then(res=> this.setState({ contactlist: res.data }))
            .catch(err=> alert("contact cant be added")) 
                }

                
    onclickedit=(el)=> {
    this.props.transfert({_id:el._id, name:el.name,phone :el.phone,email:el.email})
    }
  
 
  render() {
    return (
      <div className="contactlist">

   {this.state.contactlist.map(el => <div className="card" style={{width : "22rem"}}>
  <div className="card-body">
    <p className="card-text">Contact Name : {el.name} </p>
    <p className="card-text">Contact Phone Number : {el.phone} </p>
    <p className="card-text">Contact Email : {el.email} </p>

    <div class="buttoncard">
  <button type="button" class="btn btn-danger"onClick={()=>this.removecontact(el._id)}>Delete</button>
<Link to ="/editcontact" ><button type="button" class="btn btn-warning"onClick={()=>this.onclickedit(el)}> Edit</button> </Link>
  </div>
  </div>
   </div> )}
</div>
    );
  }
}

export default Contactlist ;