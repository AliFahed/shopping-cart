import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>ShopCom</h1>
        </div>
        <nav className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
