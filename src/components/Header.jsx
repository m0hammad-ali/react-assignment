import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <nav className="navbar">
        <h1 className="logo">ReactAssignment</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
