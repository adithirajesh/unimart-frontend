import { Link } from "react-router-dom";
import "../styles/productCard.css";

function ProductCard({ product }) {
  const handleView = async () => {
    // const userId = localStorage.getItem("userId");
    // if (!userId) return;
    const userId=localStorage.getItem("userId");

    try {
      const res = await fetch("https://unimart-backend-9jbf.onrender.com/api/activity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, product_id: product.id, action: "view" }),
      });

      const data = await res.json();
      console.log("Activity logged:", data);
    } catch (err) {
      console.error("Error logging activity:", err);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-title">{product.name}</div>
      <div className="product-price">£{product.price}</div>
      <div className="product-actions">
        <Link to={`/products/${product.id}`} onClick={handleView}>
          View
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
