import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage.js';
import { Cart } from './components/pages/Cart.js';
import { Favorites } from './components/pages/Favorites.js';
import { LandingPage } from './components/pages/LandingPage';
import ProductDetail from './components/pages/ProductDetail.js';
import { Signup } from './components/pages/Signup';
import ProductDetail from './components/pages/ProductDetail.js';


import { Signup } from './components/pages/Signup.js'

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
			<Route path="/product/:id" element={<ProductDetail />} />
			<Route path="/Signup" exact element = {<Signup />}>
			</Route>
		</Routes>
	</Router>
  );
}

export default App;