import React, {Component} from "react";
import LineChart from "../charts/line-chart";

class AfternoonCommute extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        {a: 1, b: 3},
        {a: 2, b: 6},
        {a: 3, b: 2},
        {a: 4, b: 12},
        {a: 5, b: 8}
      ],
      width: 700,
      height: 500,
      margin: 20
    }
  };

  componentDidMount() {
    fetch('https://www.strava.com/api/v3/athlete?access_token=ed9c36dc20bebb93d16ceb89e1fdedf87b30ef0d')
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
    return (
      <div>
        <h3>Afternoon Commute Times</h3>
        <LineChart data={this.state.data} width={this.state.width} height={this.state.height} margin={this.state.margin} />
      </div>
    );
  }

}

export default AfternoonCommute
