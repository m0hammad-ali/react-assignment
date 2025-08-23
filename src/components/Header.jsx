import "./Header.css";

const Header = ({ onNavigate }) => {
  return (
    <header className="site-header">
      <nav className="navbar">
        <h1 className="logo">ReactAssignment</h1>
        <ul className="nav-links">
          <li onClick={() => onNavigate("home")}>Home</li>
          <li onClick={() => onNavigate("about")}>About</li>
          <li onClick={() => onNavigate("services")}>Services</li>
          <li onClick={() => onNavigate("blogs")}>Blogs</li>
          <li onClick={() => onNavigate("contact")}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
