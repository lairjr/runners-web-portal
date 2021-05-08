import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import List from './routes/List';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
