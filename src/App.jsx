import './App.css'
import { useState } from 'react';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  let PageComponent;
  if (currentPage === 'home') {
    PageComponent = <Home />;
  } else if (currentPage === 'about') {
    PageComponent = <About />;
  } else if (currentPage === 'services') {
    PageComponent = <Services />;
  } else if (currentPage === 'blogs') {
    PageComponent = <Blogs />;
  } else if (currentPage === 'contact') {
    PageComponent = <Contact />;
  } else {
    PageComponent = <Home />; 
  }

  return (
    <>
      <Header onNavigate={setCurrentPage} />
      <main className="main-content">
        {PageComponent}
      </main>
      <Footer />
    </>
  )
}

export default App
