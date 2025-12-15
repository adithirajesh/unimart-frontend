import {useState} from "react";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function handleSignup(e) {
        e.preventDefault();
        const res = await fetch("http://127.0.0.1:5000/api/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),  
        });
        const data = await res.json();
        setMessage(data.message);
    }
    return (
    <div style={{ padding: 30, maxWidth: 420, margin: "0 auto", textAlign: "center" }}>
      <img
        src={logo}
        alt="Unimart logo"
        style={{ width: 140, height: "auto", display: "block", margin: "0 auto 20px" }}
      />
      <h2>Create an Account</h2>
      <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <input
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          placeholder="Your university email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button type="submit" style={{ marginTop: 4 }}>Sign Up</button>
      </form>

      {message && <p style={{ marginTop: 12 }}>{message}</p>}
    </div>
  );
}
