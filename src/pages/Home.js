import "../styles/home.css";
import NikeImage from "../images/nike_home_page_image.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-section">
          <div className="hero-container">
            <div className="text-container">
              <p className="sub-text">Best Nike Shoe collections</p>
              <h2 className="main-text">#JUST DO IT!</h2>
              <button className="shop-now-btn">
                <Link to="/shop" className="shop-now-link">
                  Shop Now
                </Link>
              </button>
            </div>
            <div className="image-container">
              <img className="nike-image" src={NikeImage} alt="Nike Shoes" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
