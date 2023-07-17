import owl from "./owl.png";
import "./Landing.css";
import {Navbar} from "./navbar.js";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";


export const LandingPage = () => {
  return (
    <div className="App">
      <Navbar>

      </Navbar>

      <header className="App-header">
        <img src={owl} className="App-logo" alt="logo" style={{ width: "10vw", height: "auto"}}/>
        <p>
          Welcome to Owl Mart!
        </p>
      </header>
    </div>
  );
}

export default LandingPage;