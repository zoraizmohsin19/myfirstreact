import React, { Component } from "react";
import axios from 'axios';


export default class DeleteTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.delTutorial = this.delTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      _id: "",

      submitted: false
    };
  }

  onChangeId(e) { 
    this.setState({
      _id: e.target.value
    });
  }

  deleteTutorial() {

    var data = {
      _id: this.state._id,
    };

    // eslint-disable-next-line no-template-curly-in-string
    axios.delete('http://localhost:8080/api/tutorials/'+data._id)
      .then(response => {
        this.setState({
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  delTutorial() {
    this.setState({
      _id: "",
      submitted: false
    });
  }

 
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You have deleted successfully!</h4>
            <button className="btn btn-success" onClick={this.delTutorial}>
              Want to Delete Tutorials
            </button>
          </div>
        ) : (
          <div>
          <br/>
            <div className="form-group">
              <label htmlFor="title">ID</label>
              <input
                type="text"
                className="form-control"
                id="_id"
                required
                value={this.state._id}
                onChange={this.onChangeId}
                name="_id"
              />
            </div>

<br/>
            <button onClick={this.deleteTutorial} className="btn btn-success">
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}