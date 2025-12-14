const API_BASE = "https://unimart-backend-9jbf.onrender.com";

export async function fetchProducts() {
  return fetch(`${API_BASE}/api/products`).then(res => res.json());
}