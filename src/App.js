import './App.css';
import Navbar from './navbar'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Create from './Create'
import BlogDetails from './Blogdetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path = "/">
              <Home />
            </Route>

            <Route path = "/create">
              <Create />
            </Route>

            <Route path = "/blogs/:id">
              <BlogDetails />
            </Route>

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
