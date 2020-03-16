import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const myWorker = new Worker("static/js/webworker.chunk.js");

myWorker.onmessage = function(e) {
  console.log("Message received from worker", e);
};

myWorker.onerror = function(e) {
  console.log("Error from worker", e);
};

myWorker.postMessage("test");
// @ts-ignore
window.myWorker = myWorker;
