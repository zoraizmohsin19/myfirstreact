import React, {Component} from 'react';
import axios from 'axios';


class ListTutorials extends Component {


  
  state = {
    tutorials: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/tutorials')
    .then((res) => {
      this.setState({ tutorials: res.data })
    })
    .catch(console.log)
  }

  render () {
    
    return (
     <div>
     <center><h1>Tutorials List</h1></center>
     {this.props.searchflag ? (
      <div>
      {this.props.sTutorials.map((searchtutorial) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{searchtutorial.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{searchtutorial.description}</h6>
            <p class="card-text">{searchtutorial._id}</p>
            
          </div>
        </div>
        
      ))}
      </div>
      ) : (
      
      <div>
      {this.state.tutorials.map((tutorial) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{tutorial.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{tutorial.description}</h6>
            <p class="card-text">{tutorial._id}</p>
            
          </div>
        </div>
      ))}
      </div>
      )}
    </div>

    );
  }
}

export default ListTutorials;