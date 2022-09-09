import "../styles/shop.css";
import GreyNike from "../images/grey_nike.jpg";

const Shop = () => {
  return (
    <div>
      <main className="main">
        <section className="products">
          <div className="items">
            <img className="item-image" src={GreyNike} alt="Grey Nike" />
            <p className="item-name">Grey Nike</p>
            <p className="item-price">$49.99</p>
            <button className="add-item-btn">Add to Cart</button>
          </div>
          <div className="items">
            <img className="item-image" src={GreyNike} alt="Grey Nike" />
            <p className="item-name">Grey Nike</p>
            <p className="item-price">$49.99</p>
            <button className="add-item-btn">Add to Cart</button>
          </div>
          <div className="items">
            <img className="item-image" src={GreyNike} alt="Grey Nike" />
            <p className="item-name">Grey Nike</p>
            <p className="item-price">$49.99</p>
            <button className="add-item-btn">Add to Cart</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Shop;
