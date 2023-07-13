import owl from './owl.png'
import './Landing.css';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={owl} className="App-logo" alt="logo" style={{ width: '10vw', height: 'auto'}}/>
        <p>
          Welcome to Owlmart!!
        </p>
      </header>
    </div>
  );
}

export default HomePage;
