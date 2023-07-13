import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { TestPage } from './components/pages/TestPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                <Route path="/page" exact>
                    <TestPage/>
                </Route>
            </Switch>
        </Router>
    )
}