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
    <div style={{ padding: 30 }}>
      <h2>Create an Account</h2>
      <form onSubmit={handleSignup}>
        <input
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
        /><br/>

        <input
          placeholder="Your university email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br/>

        <button type="submit">Sign Up</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
