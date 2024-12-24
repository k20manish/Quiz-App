import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Quiz from './components/Quiz';
import Home from './components/Home';
 
  

const NotFound = () => <h1>404 - Page Not Found</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         
        <Route path='/' element={<Home/>} />
        <Route path="/Quiz" element={<Quiz />} />
         
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
