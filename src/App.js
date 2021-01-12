import React from 'react';

//import component
import Sidebar from './Sidebar'
import './App.css';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app_body">
        <Sidebar />
        {/* Sidebar */}
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
