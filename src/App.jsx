import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

function App() {
  const currentPage = 'Contact';
  let PageComponent;
  switch (currentPage) {
    case 'Home':
      PageComponent = <Home />;
      break;
    case 'About':
      PageComponent = <About />;
      break;
    case 'Services':
      PageComponent = <Services />;
      break;
    case 'Blogs':
      PageComponent = <Blogs />;
      break;
    case 'Contact':
      PageComponent = <Contact />;
      break;
    default:
      PageComponent = <Home />;
  }
  return (
    <>
      <Header />
      <main className="main-content">
        {PageComponent}
      </main>
      <Footer />
    </>
  )
}

export default App
