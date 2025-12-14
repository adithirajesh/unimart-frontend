import { useEffect, useState } from "react";
import ProductCard from "../components/Productcard";
import Productgrid from "../components/Productgrid";

function Browse() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);


  return (
    <div className="container">
  <h2 style={{ marginBottom: "16px" }}>Browse Products</h2>
  <div className="grid">
    {products.map(p => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
</div>
  );
}

export default Browse;
