import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logout from "./Logout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppRouter />
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
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Logout />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="mainMenu">
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
