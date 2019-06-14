import React from "react";
import ReactDOM from "react-dom";
import Profile from "./components/profile/profile"

const App = () => {
    return (
        <Profile/>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));