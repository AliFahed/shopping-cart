import "../styles/shop.css";
import { productsData } from "../productsData";
import Product from "../components/Product";

const Shop = () => {
  const products = productsData.map((item) => {
    return <Product key={item.id} item={item} />;
  });

  return (
    <div>
      <main className="main">
        <section className="products">{products}</section>
      </main>
    </div>
  );
};

export default Shop;
