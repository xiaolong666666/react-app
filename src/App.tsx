import React from "react";
// import Compare from "./components/Base/Compare";
// import Hooks from "./components/Base/Hooks";
// import LogReport from "./components/Base/LogReport";
// import RenderControl from "./components/Base/RenderControl";
import ReduxManageMent from "./components/StateManageMent/ReduxManageMent";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Compare /> */}
      {/* <Hooks /> */}
      {/* @ts-ignore; */}
      {/* <LogReport /> */}
      {/* <RenderControl /> */}
      <ReduxManageMent />
    </div>
  );
}

export default App;
