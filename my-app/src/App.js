import React from 'react';
// import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import JobListing from './Screens/JobListing/jobListing.js';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<JobListing />} />
    </Routes>
  )
}

export default App;