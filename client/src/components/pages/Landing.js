import owl from "./owl.png";
import "./Landing.css";
import {Navbar} from "./navbar";

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
