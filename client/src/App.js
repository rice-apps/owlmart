import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage.js';
import { Favorites } from './components/pages/Favorites.js';
import { LandingPage } from './components/pages/LandingPage';
import ProductDetail from './components/pages/ProductDetail.js';


const App = () => {
  return (
	<Router>
		<Routes>
			<Route path="/" exact element = {<LandingPage/>}>
			</Route>
        	<Route path="/favorites" exact element = {<Favorites/>}>
			</Route>
			<Route path="/home" exact element = {<HomePage/>}>
			</Route>

			<Route path="/product/:id" element={<ProductDetail />} />
			
		</Routes>
	</Router>
  );
}

export default App;