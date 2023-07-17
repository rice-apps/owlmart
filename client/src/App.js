import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { Cart } from './components/pages/Cart';
import { Favorites } from './components/pages/Favorites';
import { LandingPage } from './components/pages/LandingPage';


const App = () => {
  return (
	<Router>
		<Routes>
			<Route path="/" exact element = {<LandingPage/>}>
			</Route>
			<Route path="/cart" exact element = {<Cart/>}>
			</Route>
        	<Route path="/favorites" exact element = {<Favorites/>}>
			</Route>
			<Route path="/home" exact element = {<HomePage/>}>
			</Route>
			
		</Routes>
	</Router>
  );
}

export default App;