import React, { component } from 'react';
import GetUserDetails from "./get-user-details";
import GetUserStats from "./get-user-stats";

class Profile extends React.Component {  
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
