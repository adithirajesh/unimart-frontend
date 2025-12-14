import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Productdetails(){
    const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h3>Loading...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt="img" width="200" />
      <p>{product.description}</p>
      <h3>£{product.price}</h3>
      <button style={{ marginRight: "10px" }}>Buy Now</button>
      <button>Negotiate</button>
    </div>
  );
}

export default Productdetails;