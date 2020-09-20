import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
let IS_QIANKUN = window.__POWERED_BY_QIANKUN__;
function App() {
  return (
    <BrowserRouter basename={IS_QIANKUN ? "/react" : ""}>
      <Link to="/">首页</Link>
      <Link to="/about">关于页面</Link>
      <Route
        path="/"
        exact
        render={() => (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
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
          </div>
        )}
      ></Route>
      <Route path="/about" render={() => <h1>about页面</h1>}></Route>
    </BrowserRouter>
  );
}

// qiankun 无关的技术栈

export default App;
