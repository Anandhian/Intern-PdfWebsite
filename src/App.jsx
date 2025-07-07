// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import FilePreview from "./Pages/FilePreview";
import Done from "./Pages/Done";

import toolRoutes from "./utils/routesConfig"; // Tool-based route config
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Static Routes */}
        <Route path="/preview" element={<FilePreview />} />
        <Route path="/success" element={<Done />} />

        {/* Tool Routes via Config */}
        {toolRoutes.map(({ path, element: Component, props }) => (
          <Route key={path} path={path} element={<Component {...props} />} />
        ))}

        {/* Optional: NotFound Fallback Route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;



