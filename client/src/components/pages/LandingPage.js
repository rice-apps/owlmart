import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import owl from './owl.png'
import './Landing.css';
import {Navbar} from "./navbar.js";


export const LandingPage = () => {
  return (

    <div className="App">
       <Navbar />
      <header className="App-header">
        <img src={owl} className="App-logo" alt="logo" style={{ width: '10vw', height: 'auto'}}/>
        <p>
          Welcome to Owlmart!!
        </p>
		<Link to='/home'>
			<Button variant="contained" color="success">
				Home
			</Button>
		</Link>
      </header>
    </div>
  );
}