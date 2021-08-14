import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact component={ProductListing}/>
      <Route path="/product/:productId" exact component={ProductDetail}/>
      <Route>404 Not Found</Route>
      </Switch>
    
      </Router>
      
     
    </div>
  );
}

export default App;
