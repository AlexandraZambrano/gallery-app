import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import UploadForm from './pages/UploadForm/UploadForm';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<UploadForm />} />
          <Route path={'/update/:id'} element={<UploadForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
