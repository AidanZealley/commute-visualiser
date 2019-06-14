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
    fetch('https://www.strava.com/api/v3/athletes/35130920/stats?access_token=ed9c36dc20bebb93d16ceb89e1fdedf87b30ef0d')
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
