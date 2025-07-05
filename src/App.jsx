// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../src/Pages/Home'
import FilePreview from "./Pages/FilePreview";
import MergeSuccess from "./pages/Done"; 

import toolRoutes from "./utils/routesConfig"; // ✅ Tool-based route config
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Static Routes */}
        <Route path="/preview" element={<FilePreview />} />
        <Route path="/success" element={<MergeSuccess />} />

        {/* Tool Routes via Config */}
        {toolRoutes.map(({ path, element: Component, props }) => (
          <Route key={path} path={path} element={<Component {...props} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;



