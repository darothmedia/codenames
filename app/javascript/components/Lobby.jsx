import React from "react";
import { Link } from "react-router-dom";

class Lobby extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identifier: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {

  }

  onInputChange(event) {
    this.setState({identifier: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.history.push('/' + this.state.identifier);
  }

  render() {
    let adminMsg;
    if (this.props.location.pathname === '/secretlobby') {
      adminMsg = <p>Welcome back, boss.</p>
    }

    return (
      <div className="primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
          <div className="container secondary-color">
            {adminMsg}
            <p className="lead">
              Enter Game ID to join or create game!
            </p>
            <form onSubmit={this.onSubmit} className="text-center">
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  id="identifierFormInput" 
                  placeholder="Enter identifer" 
                  value={this.state.value}
                  onChange={this.onInputChange} 
                />
              </div>
              <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Lobby;
