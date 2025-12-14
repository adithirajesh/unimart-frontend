import { useEffect, useState } from "react";
import ProductCard from "../components/Productcard";
import Productgrid from "../components/Productgrid";

function Browse() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://unimart-backend-9jbf.onrender.com/api/products")
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
