import React from "react";
import ReactDOM from "react-dom";
import Profile from "./components/profile/profile";
import MorningCommute from "./components/commutes/morning-commute";
import AfternoonCommute from "./components/commutes/afternoon-commute"

const App = () => {
    return (
        <div>
            <Profile/>
            <MorningCommute/>
            <AfternoonCommute/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));