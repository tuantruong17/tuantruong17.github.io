// External
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Local
import "./App.css";
import { About, Home, Work, NotFound } from "./pages";
import { Layout } from "./Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
