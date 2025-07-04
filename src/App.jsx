// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FilePreview from "./pages/FilePreview";
import MergeSuccess from "./pages/MergeSuccess";
import toolRoutes from "./utils/routesConfig"; // ✅ Tool-based route config

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
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



