import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";

import Identify from './views/Identify/Identify'


function App(){ 
 
  return (
     <>     
        <Router>
          <Switch>
          <Route path="/" exact component={Identify} />         
          </Switch>
        </Router>
    </>  
  );
}

export default App;
