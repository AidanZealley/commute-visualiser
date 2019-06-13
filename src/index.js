import React from "react";
import ReactDOM from "react-dom";
import GetUsername from "./components/get-username"

const App = () => {
    return (
        <GetUsername/>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));