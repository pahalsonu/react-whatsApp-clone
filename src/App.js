import React from 'react';
import Switch from 
//import component
import Sidebar from './Sidebar'
import './App.css';
import Chat from './Chat'
import { Route, Router } from 'react-router-dom';
function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app_body">
        <Router >
          <Switch>
            <Route path = "/">
              <h1> Home Sweet Home</h1>
            </Route>
            <Sidebar />
            <Chat />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
