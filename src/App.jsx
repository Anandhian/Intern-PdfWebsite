import React from 'react'
import FileGetter from './Components/FileGetter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FilePreview from './Pages/FilePreview'
import MergeSuccess from './Pages/MergeSuccess'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FileGetter />} />
         <Route path="/preview" element={<FilePreview />} />
         <Route path="/success" element={<MergeSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

