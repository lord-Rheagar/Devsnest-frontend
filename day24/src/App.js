
import './App.css';
import Nav from './Nav'
import About from './About'
import Shop from './Dashboard'
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  
  
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/shop" component={Shop}/>
       </Switch>
        
    </div>
    </Router>
  );
}




export default App;
