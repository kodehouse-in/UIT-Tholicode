import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import AboutUs from './pages/AboutUs';
import { PageProvider } from './contexts/PageContext';
import Faculties from './pages/Faculties';
import ScrollToTop from './components/ScrollToTop';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <PageProvider>
      <Routes>
        <Route path='*' element={ <NoPage /> } />
        <Route path='/' element={ <Home /> } />
        <Route path='about-us' element= { <AboutUs /> } />
        <Route path='faculties' element={ <Faculties /> } />
      </Routes>
      </PageProvider>
    </Router>
  </StrictMode>
);