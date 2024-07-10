import React from 'react'; // React를 import합니다.
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; // Redirect 대신 Navigate를 사용

import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />  
        <Routes>
          <Route path="/cart" element={<Cart />} />  
          <Route path="/" element={<Home />} />  
          <Route path="/not-found" element={<NotFound />} />  
          <Route path="*" element={<Navigate to="/not-found" />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



/*import React from 'react'; // React를 import합니다.
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; // Redirect 대신 Navigate를 사용
import { ToastContainer , toast } from "react-toastify";

import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
   
        <Routes>
          <Route path="/cart" element={<Cart />} />  
          <Route path="/" element={<Home />} />  
          <Route path="/not-found" element={<NotFound />} />  
          <Route path="*" element={<Navigate to="/not-found" />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
*/