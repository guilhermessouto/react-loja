import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//components
import Product from "./components/Product";
import Cart from './components/Cart';
import Navbar from './components/Navbar';

//pages
import All from './pages/All'
import Picapes from './pages/Picapes'
import Comerciais from './pages/Comerciais'
import Suvs from './pages/Suvs'
import Perfomance from './pages/Perfomance'


function App() {

  
  return(
    <>
      <Router>
          <Navbar />

          <Switch>
              <Route exact path='/'>
                  <All />
              </Route>

              <Route path='/picapes'>
                  <Picapes />
              </Route>

              <Route path='/comerciais'>
                  <Comerciais />
              </Route>

              <Route path='/suvs'>
                  <Suvs />
              </Route>

              <Route path='/perfomance'>
                  <Perfomance />
              </Route>
          </Switch>
      </Router>
    </>
)
}
export default App;
