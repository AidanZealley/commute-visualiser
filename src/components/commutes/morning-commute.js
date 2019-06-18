import React, {Component} from "react";
import LineChart from "../charts/line-chart";

class MorningCommute extends Component {

  constructor() {
    super();
    this.state = {
      rides: [],
      width: 700,
      height: 500,
      margin: 20,
      allRides: 0
    }
  };


  componentDidMount() {
    let pages = 0;

    fetch('https://www.strava.com/api/v3/athletes/35130920/stats?access_token=1ec0c6a50152e76480d19465ca79207786db5d26')
    .then(response => {return response.json()})
    .then(data => {
      pages = Math.ceil(data.all_ride_totals.count / 200);
    })
    .then(function() {
      for (var i = 0; i < pages; i++) {
        fetch('https://www.strava.com/api/v3/athlete/activities?access_token=745418445eb7a3526afe38eee2cc4ddb6567ef2c&before=1556300800&after=1546300800&page=' + i+1 + '&per_page=200')
        .then(response => {return response.json()})
        .then(data => {
          let matchingRides = [];
  
          data.map((ride, index) => {
            if (ride.name == "Morning Ride" && ride.commute == true) {
              let matchingRide = {};
  
              matchingRide.a = index;
              matchingRide.b = ride.moving_time;
  
              matchingRides.push(matchingRide);
            }
          })
  
          this.setState({
            rides: [
              ...this.state.rides,
              matchingRides 
            ]
          })
  
        })
  
        .catch(error => this.setState({ error }));
      }
    })
    .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <div>
        <h3>Morning Commute Times</h3>
        <LineChart key="1" data={this.state.rides} width={this.state.width} height={this.state.height} margin={this.state.margin} />
      </div>
    );
  }

}

export default MorningCommute
