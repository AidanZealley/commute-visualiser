import React, {Component} from "react";
import GetUserDetails from "./get-user-details";
import GetUserStats from "./get-user-stats";

class Profile extends Component {

  render() {
    return (
        <div>
            <GetUserDetails/>
            <GetUserStats/>
        </div>
    )
  }

}

export default Profile
