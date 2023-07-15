import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Cart, Favorites } from './pages';

const App = () => {
  return (
	<Router>
		<Routes>
			<Route path="/cart" exact element = {<Cart/>}>
			</Route>
			<Route path="/home" exact element = {<Home/>}>
			</Route>
            <Route path="/favorites" exact element = {<Favorites/>}>
			</Route>
		</Routes>
	</Router>
  );
}

export default App;