import { Link } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="container">
            <h1 className="company-name">StoreCom</h1>
          </div>
          <nav className="navbar">
            <li className="nav-links">
              <Link className="links" to="/">
                Home
              </Link>
            </li>
            <li className="nav-links">
              <Link className="links" to="/shop">
                Store
              </Link>
            </li>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
