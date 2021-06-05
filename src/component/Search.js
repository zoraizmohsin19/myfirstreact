import React, { Component } from 'react'
import 'react-notifications/lib/notifications.css';

export class Search extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);

        this.state = {
            search: ""
        };
      }


onChange = (e)=>{
   this.setState({search:e.target.value})
}

onSubmit = (e) => {
e.preventDefault ();
if(this.state.search===''){
    this.props.setAlert('Please Enter Something','light')
}else{
    this.props.searchTutorials(this.state.search);
};

}


    render() {
        return (
        <div>
            <div>
                <form className="form">
                 <input 
                 type="text" 
                 name="search" id="search"
                 placeholder="Search Tutorials"  
                 value={this.state.search} 
                 onChange={this.onChange}
                 />
                    &nbsp;

                 <input type="submit" onClick={this.onSubmit} value="search" className="btn btn-dark btn-block" />
                  </form>
           </div>

           
        </div>   
        )
    }
}

export default Search
