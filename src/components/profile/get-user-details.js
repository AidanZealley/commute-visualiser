import React, {Component} from "react";

class GetUserDetails extends Component {
  constructor() {
    super();
    this.state = {
      avatar: "",
      username: "",
      firstname: "",
      lastname: ""
    }
  };

  componentDidMount() {
    fetch('https://www.strava.com/api/v3/athlete?access_token=1ec0c6a50152e76480d19465ca79207786db5d26')
    .then(response => {return response.json()}
    ).then(data => 
      this.setState({
        avatar: data.profile,
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname
      })
    )
    .catch(error => this.setState({ error }));
  }
  
  render() {
    const { avatar, username, firstname, lastname, followers } = this.state;

    return (
      <div>
        <img src={avatar}/>
        <h1>{username}</h1>
        <h2>{firstname} {lastname}</h2>
      </div>
    );
  }
}

export default GetUserDetails
