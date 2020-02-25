import React from 'react';
import './App.css';
import { BrowserRouter}  from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import {routes} from './home-route'
import Nav from './nav'
function App() {
  return (
    <div className="App">
      <Nav />
        <BrowserRouter>     
          {renderRoutes(routes)}
        </BrowserRouter>
    </div>
  );
}


export default App;
