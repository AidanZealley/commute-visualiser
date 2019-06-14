import React, { component } from 'react';

class GetUsername extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  };

  componentDidMount() {
    fetch('https://www.strava.com/api/v3/athlete?access_token=ed9c36dc20bebb93d16ceb89e1fdedf87b30ef0d')
    .then(response => {return response.json()}
    ).then(data => 
      this.setState({username: data.username})
    )
    .catch(error => this.setState({ error }));
  }
  
  render() {
    return (
      <h1>{this.state.username}</h1>
    )
  }
}


export default GetUsername
