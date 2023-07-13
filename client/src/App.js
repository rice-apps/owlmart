import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/pages/LandingPage';
import { HomePage } from './components/pages/HomePage';

const App = () => {
  return (
	<Router>
		<Routes>
			<Route path="/" exact element = {<LandingPage/>}>
			</Route>
			<Route path="/home" exact element = {<HomePage/>}>
			</Route>
		</Routes>
	</Router>
  );
}

export default App;