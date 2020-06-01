import React, { Component } from "react";
import io from "socket.io-client";
import OAuth from "./OAuth";

import "./App.css";
const API_URL = "https://localhost:5000";

const socket = io(API_URL);

export default class App extends Component {
  render() {
    return (
      <div className={"wrapper"}>
        <div className={"container"}>
          <OAuth provider={"facebook"} key={"facebook"} socket={socket} />
        </div>
      </div>
    );
  }
}
