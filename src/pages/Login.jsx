import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("https://unimart-backend-9jbf.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }), // only send email
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
        
      // Save user_id to localStorage for now
      localStorage.setItem("userId", data.user_id);

      navigate("/landing"); // Redirect to product browsing page
    } else {
      alert(data.error || "Login failed");
    }
  }

  return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
    }}
  >
    <form
      onSubmit={handleLogin}
      style={{
        backgroundColor: "white",
        padding: "32px",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "500px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "8px" }}>
        Login to UniMart
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={inputStyle}
      />

      <input
        type="email"
        placeholder="University Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>
        Login
      </button>
    </form>
  </div>
);


}
const inputStyle = {
  padding: "10px 12px",
  fontSize: "14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
};

const buttonStyle = {
  marginTop: "8px",
  padding: "10px",
  fontSize: "15px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "2563eb",
  color: "white",
  cursor: "pointer",
};
