import owl from './owl.png';
import './Landing.css';
import {Navbar} from './navbar';

function App() {
  return (
    <div className="App">

      <Navbar>
        
      </Navbar>

      {/* <nav>
        <ul>
          <li>
            <a href="Home.js">Home</a>
          </li>

          <li>
            <a href="Favorites.js">Favorites</a>
          </li>

          <li>
            <a href="Cart.js">Cart</a>
          </li>
        </ul>

      </nav> */}

      <header className="App-header">
        <img src={owl} className="App-logo" alt="logo" style={{ width: '10vw', height: 'auto'}}/>
        <p>
          Hello
        </p>
      </header>
    </div>
  );
}

export default App;
