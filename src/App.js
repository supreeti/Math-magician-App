import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';
import Home from './routes/home';
import Calculator from './routes/calculator';
import FetchData from './routes/fetchdata';
import Screen from './component/Screen';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Screen />
        <Routes>
          <Route path="/math-magicians" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/fetchdata" element={<FetchData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
