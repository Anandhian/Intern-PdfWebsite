// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Done from "./Pages/Done";
import FilePreview from "./Pages/pdf/FilePreview";


import toolRoutes from "./utils/routesConfig";
import Compression from "./Pages/pdf/Compression";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Static Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Done />} />
        <Route
          path="/merge/preview"
          element={
            <FilePreview
              title="Merge PDF"
              subtitle="Combine multiple PDF files into a single document"
              bgColor="#DBEAFE"
              titleColor="#1E293B"
              textColor="#FFFFFF"
              
            />
          }
        />
        <Route path="/compress/preview" element={<Compression></Compression>} />

        {/* Tool-based Routes */}
        {toolRoutes.map(({ path, element: Component, props }) => (
          <Route
            key={path}
            path={path}
            element={<Component {...(props || {})} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;




