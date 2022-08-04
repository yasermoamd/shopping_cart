import "./styles.css";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import CartList from "./CartList";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <div className="product_list">
          <div className="item">
            <ProductList />
            <ProductList />
            <ProductList />
          </div>
        </div>
      </main>
    </div>
  );
}
