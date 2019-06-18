import React, { component } from 'react';

class GetUserStats extends React.Component {
  constructor() {
    super();
    this.state = {
      yearRides: "",
      allRides: ""
    }
  };

  componentDidMount() {
    fetch('https://www.strava.com/api/v3/athletes/35130920/stats?access_token=1ec0c6a50152e76480d19465ca79207786db5d26')
    .then(response => {return response.json()}
    ).then(data => 
      this.setState({
        yearRides: data.ytd_ride_totals.count,
        allRides: data.all_ride_totals.count,
      })
    )
    .catch(error => this.setState({ error }));
  }
  
  render() {
    const { yearRides, allRides } = this.state;

    return (
      <div>
        <p>Rides this year: {yearRides}</p>
        <p>Total rides: {allRides}</p>
      </div>
    );
  }
}

export default GetUserStats
