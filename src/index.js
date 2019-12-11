import React from "react";
import ReactDOM from "react-dom";

import Dialog from "./ex/Dialog";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Dialog />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
