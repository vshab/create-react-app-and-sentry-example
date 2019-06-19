import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Setup setnry
if (
  process.env.NODE_ENV === "production" &&
  process.env.REACT_APP_SENTRY_RELEASE
) {
  Sentry.init({
    dsn: "YOUR_SENTRY_DSN",
    release: process.env.REACT_APP_SENTRY_RELEASE
  });
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
