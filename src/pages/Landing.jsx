import {useNavigate} from "react-router-dom";

export default function Landing(){
    const navigate = useNavigate();
    return(
<div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #f5f5f5, #e0e0e0)",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "16px",
          padding: "60px 30px 40px 30px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
          {/* <img
          src="/logo192.png"
          alt="Unimart logo"
          style={{
            width: "100px",
            marginBottom: "20px",
          }}
        /> */}

        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "40px", color: "#4f46e5" }}>
          Unimart
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <button
            style={{
              padding: "15px 0",
              fontSize: "1.2rem",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#4f46e5",
              color: "#fff",
              fontWeight: "600",
              transition: "background-color 0.2s, transform 0.2s",
            }}
            onClick={() => navigate("/browse")}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = "#3730a3";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = "#4f46e5";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Browse Products
          </button>

          <button
            style={{
              padding: "15px 0",
              fontSize: "1.2rem",
              borderRadius: "12px",
              border: "2px solid #4f46e5",
              cursor: "pointer",
              backgroundColor: "#fff",
              color: "#4f46e5",
              fontWeight: "600",
              transition: "background-color 0.2s, color 0.2s, transform 0.2s",
            }}
        
          >
            Sell Your Product
          </button>
        </div>
      </div>
    </div>


    )
}
