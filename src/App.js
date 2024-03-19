// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar.js";
// import Characters from "./components/Characters.js";
import Main from "./components/Main.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Stories from "./components/Stories.js";
import SortBy from "./components/SortBy.js";
import Footer from "./components/Footer.js";
import Table2 from "./components/Table2.js";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/Stories'>
              <Stories />
            </Route>
            <Route path='/SortBy'>
              <SortBy />
            </Route>



          </Switch>
      
        </div>
        <Footer />


      
      </div>
    </Router>
  );
}

export default App;
