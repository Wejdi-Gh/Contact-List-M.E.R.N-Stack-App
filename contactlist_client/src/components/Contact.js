import React, { Component } from 'react';
import Addcontact from './addcontact'
import { Route,Switch, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Contactlist from './contactlist'
import Modifycontact from './modifycontact'

class Contactapp extends Component {
    constructor(props) {
        super(props)
        this.state={editcontact :""}
     
           }

    statetransfert=(data)=>{

     this.setState({editcontact:data})
    }

  render() {
    return (
      <Router>
      <div className="contactnav" >
      <h1> Welcome to my Contact App </h1>
      <div className="buttonform">
     
      <Link to="/contactlist"> <button type="button" class="btn btn-secondary">Contact List</button> </Link>
      <Link to="/addcontact"> <button type="button" class="btn btn-success" > Add Contact</button> </Link>
      </div>

      <Switch>
        <Route exact path="/addcontact"  render={() => <Addcontact />}/> 
        <Route exact path="/contactlist"  render={() => <Contactlist  transfert={this.statetransfert} />} /> 
        <Route exact path="/editcontact" render={() => <Modifycontact edit={this.state.editcontact} />} /> 
      </Switch>
   


      </div>
      </Router>


    );
  }
}

export default Contactapp ;