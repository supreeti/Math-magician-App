import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppHolder from './calculator';
import Quote from './fetchdata';
import HomePage from './home';
import Navigator from './navigation';
const Mainpage = () => (
  <>
    <Navigator />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<AppHolder />} />
        <Route path="/quotes" element={<Quote />} />
      </Routes>
  </>
);

export default Mainpage;
