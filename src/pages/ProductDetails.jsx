import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [moreProducts, setMoreProducts] = useState([]);

  useEffect(() => {
    fetch(`https://unimart-backend-9jbf.onrender.com/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));

    fetch(`https://unimart-backend-9jbf.onrender.com/api/products`)
      .then(res => res.json())
      .then(data => setMoreProducts(data.filter(p => p.id !== parseInt(id)).slice(0, 4)));  
  }, [id]);

  const handleBuy = async () => {
    // const userId = localStorage.getItem("userId");
    // if (!userId) return;
    alert(`Sorry! This feature isn’t working yet. You’ve been added to the waiting list".`);
    const userId=localStorage.getItem("userId");

    try {
      const res = await fetch("https://unimart-backend-9jbf.onrender.com/api/activity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, product_id: product.id, action: "buy" }),
      });

      const data = await res.json();
      console.log("Activity logged:", data);
    } catch (err) {
      console.error("Error logging activity:", err);
    }
  };
  const handleNegotiate = async () => {
    // const userId = localStorage.getItem("userId");
    // if (!userId) return;
    alert(`Sorry! This feature isn’t working yet. You’ve been added to the waiting list".`);
    const userId=localStorage.getItem("userId");

    try {
      const res = await fetch("https://unimart-backend-9jbf.onrender.com/api/activity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, product_id: product.id, action: "negotiate" }),
      });

      const data = await res.json();
      console.log("Activity logged:", data);
    } catch (err) {
      console.error("Error logging activity:", err);
    }
  };

  if (!product) return <h3>Loading...</h3>;

  return (
    <div style={{ backgroundColor: "#f8fafc", padding: "40px 20px" }}>

      {/* PRODUCT CARD */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        padding: "30px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px"
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", borderRadius: "12px" }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
            {product.name}
          </h2>

          <p style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            color: "#4f46e5",
            marginBottom: "20px"
          }}>
            £{product.price}
          </p>

          <p style={{
            color: "#374151",
            lineHeight: "1.6",
            marginBottom: "30px"
          }}>
            {product.description}
          </p>

          <div style={{ display: "flex", gap: "15px", marginTop: "auto" }}>
            <button
              style={primaryBtn}
              onClick={handleBuy}
            >
              Buy Now
            </button>

            <button
              style={secondaryBtn}
              onClick={handleNegotiate}
            >
              Negotiate
            </button>
          </div>
        </div>
      </div>

      {/* MORE PRODUCTS SECTION */}
      <div style={{ maxWidth: "1100px", margin: "60px auto 0" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
          More products you might like
        </h3>

        <div style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "10px"
        }}>
          {moreProducts.map(p => (
            <Link
              key={p.id}
              to={`/products/${p.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div style={{
                minWidth: "180px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                padding: "10px",
                cursor: "pointer"
              }}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p style={{ fontWeight: "500", margin: "8px 0 4px" }}>
                  {p.name}
                </p>
                <p style={{ color: "#4f46e5", fontWeight: "bold" }}>
                  £{p.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
const primaryBtn = {
  flex: 1,
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  backgroundColor: "#4f46e5",
  color: "#fff",
  fontSize: "1rem",
  cursor: "pointer"
};

const secondaryBtn = {
  flex: 1,
  padding: "14px",
  borderRadius: "12px",
  border: "2px solid #4f46e5",
  backgroundColor: "#fff",
  color: "#4f46e5",
  fontSize: "1rem",
  cursor: "pointer"
};
export default ProductDetails;
    