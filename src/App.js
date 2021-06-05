import React, {Component} from 'react';
import Add from './component/add-tutorial.component' 
import ListTutorials from './component/ListTutorials' 
import DeleteTutorial from './component/delete-tutorial.component' 
import UpdateTutorials from './component/UpdateTutorials' 
import Alert from './component/Alert' 
import Search from './component/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './component/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';




class App extends Component {

  state = {
    sTutorials:[],
    searchflag: false,
    alert:null
  }

  searchTutorials = (search) => {

    axios.get('http://localhost:8080/api/tutorials/search/'+search) 
    .then((res) => {
      this.setState({sTutorials: res.data})
      this.setState({searchflag: true})
    })
    .catch(console.log)
  }

//alert
setAlert = (msg,type)=>{
  this.setState({alert:{msg,type}});
}



  render () {
    return (

      <Router>
          <div className='App'>
            <Navigation />
            <br/>
            
            
            <div className='container'>
              <Switch>
                <Route exact path="/">
                 <Search searchTutorials={this.searchTutorials}
                         setAlert={this.setAlert}  />
                  <Alert alert={this.state.alert}/>
                 <ListTutorials sTutorials={this.state.sTutorials} searchflag={this.state.searchflag}/>
                 
                </Route>
                <Route exact path='/add' component={Add} />
                <Route exact path='/update' component={UpdateTutorials} />
                <Route exact path='/delete' component={DeleteTutorial} />
              </Switch>
             
            </div>
          </div>
        </Router>
    );
  }
}

export default App;