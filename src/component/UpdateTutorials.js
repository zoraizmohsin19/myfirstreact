import React, { Component } from "react";
import axios from 'axios';


export default class UpdateTutorials extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.updatenewTutorial = this.updatenewTutorial.bind(this);

    this.state = {
      _id: "",
      title: "",
      description: "", 
      published: false,

      submitted: false
    };
  }

  onChangeId(e) { 
    this.setState({
      _id: e.target.value
    });
  }

  onChangeTitle(e) { 
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  updateTutorial() {

    var data = {
      _id:this.state._id,
      title: this.state.title,
      description: this.state.description
    };

   
    axios.put('http://localhost:8080/api/tutorials/'+data._id, 
      { 
        "title": data.title,
        "description": data.description,
        "published":false
      },{
      headers: {
        'Content-Type': 'application/json',
        }
      }
      )
      .then(response => {
        this.setState({
          _id: response.data._id,
          title: response.data.title,
          description: response.data.description,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatenewTutorial() {
    this.setState({
      _id: "",
      title: "",
      description: "",

      submitted: false
    });
  }

 
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You have Updated successfully!</h4>
            <button className="btn btn-success" onClick={this.updatenewTutorial}>
              Update More
            </button>
          </div>
        ) : (
          <div>
          <br/>
            <div className="form-group">
              <label htmlFor="_id">Update Data by Id</label>
              <input
                type="text" 
                className="form-control"
                _id="_id"
                required
                value={this.state._id}
                onChange={this.onChangeId}
                name="_id"
              />
            </div>
          <br/>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
<br/>
            <button onClick={this.updateTutorial} className="btn btn-success">
              Update Tutorials
            </button>
          </div>
        )}
      </div>
    );
  }
}