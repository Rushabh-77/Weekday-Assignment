import React from "react";
import { Route, Routes } from "react-router-dom";
import JobListing from "../Screens/JobListing/jobListing.js";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<JobListing />} />
        </Routes>
    )
}

export default AppRoutes;