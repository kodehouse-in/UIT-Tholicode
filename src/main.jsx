import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Faculties from './pages/Faculties';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='*' element={ <NoPage /> } />
        <Route path='/' element={ <Home /> } />
        <Route path="/faculties" element={ <Faculties/> }/>
      </Routes>
    </Router>
  </StrictMode>
);