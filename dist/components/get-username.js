import React, { component } from 'react';

class GetUsername extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  };

  componentDidMount() {
    fetch('https://www.strava.com/api/v3/athlete?access_token=88cc0e65d44b0e6d3776be282a2c7bc361d059c7')
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

console.log('arse')

export default GetUsername
