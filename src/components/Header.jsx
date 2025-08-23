import { useState } from "react";
import "./Header.css";

const Header = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (section) => {
    onNavigate(section);
    setMenuOpen(false); // close menu on mobile after click
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <h1 className="logo">ReactAssignment</h1>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => handleClick("home")}>Home</li>
          <li onClick={() => handleClick("about")}>About</li>
          <li onClick={() => handleClick("services")}>Services</li>
          <li onClick={() => handleClick("blogs")}>Blogs</li>
          <li onClick={() => handleClick("contact")}>Contact</li>
        </ul>

        {/* Move hamburger inside navbar */}
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </header>
  );
};

export default Header;
