import React from "react";
import pdfIcon from "./icons8-pdf-100.png";
import toolsIcon from "./icons8-tools-100.png";
import shareIcon from "./icons8-share-100.png";

function Flipbook() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", padding: "30px" }}>
      <h2 style={{
        textAlign: "center",
        color: "#cccccc",
        fontWeight: "bold",
        marginBottom: "48px"
      }}>How It Works</h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "100px",
        marginBottom: "56px"
      }}>
        <div style={{ textAlign: "center" }}>
          <img src={pdfIcon} alt="PDF Icon" style={{
            width: "100px",
            height: "100px",
            background: "#eaf1fb",
            borderRadius: "18px",
            padding: "15px",
            marginBottom: "10px"
          }} />
          <div style={{ fontWeight: "600", marginTop: "8px" }}>Upload your PDF</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={toolsIcon} alt="Tools Icon" style={{
            width: "100px",
            height: "100px",
            background: "#eaf1fb",
            borderRadius: "18px",
            padding: "15px",
            marginBottom: "10px"
          }} />
          <div style={{ fontWeight: "600", marginTop: "8px" }}>Customize & Add Voice</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={shareIcon} alt="Share Icon" style={{
            width: "100px",
            height: "100px",
            background: "#eaf1fb",
            borderRadius: "18px",
            padding: "15px",
            marginBottom: "10px"
          }} />
          <div style={{ fontWeight: "600", marginTop: "8px" }}>Share</div>
        </div>
      </div>

      <h2 style={{
        textAlign: "center",
        color: "#cccccc",
        marginTop: "50px",
        fontWeight: "bold"
      }}>Why Choose Javix Flipbook</h2>

      <div style={{
        marginTop: "24px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "30px",
        maxWidth: "1080px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <div style={{
          background: "linear-gradient(#eaf1fb, #dce9f8)",
          padding: "24px 0",
          borderRadius: "18px",
          textAlign: "center",
          fontWeight: "500"
        }}>Indian Language Support</div>
        <div style={{
          background: "linear-gradient(#eaf1fb, #dce9f8)",
          padding: "24px 0",
          borderRadius: "18px",
          textAlign: "center",
          fontWeight: "500"
        }}>AI Voice Narration</div>
        <div style={{
          background: "linear-gradient(#eaf1fb, #dce9f8)",
          padding: "24px 0",
          borderRadius: "18px",
          textAlign: "center",
          fontWeight: "500"
        }}>WhatsApp Share & Analytics</div>
        <div style={{
          background: "linear-gradient(#eaf1fb, #dce9f8)",
          padding: "24px 0",
          borderRadius: "18px",
          textAlign: "center",
          fontWeight: "500"
        }}>Affordable Pricing (Starts at 49)</div>
        <div style={{
          background: "linear-gradient(#eaf1fb, #dce9f8)",
          padding: "24px 0",
          borderRadius: "18px",
          textAlign: "center",
          fontWeight: "500"
        }}>Works Offline (PWA Ready)</div>
        <div style={{
          background: "linear-gradient(#eaf1fb, #dce9f8)",
          padding: "24px 0",
          borderRadius: "18px",
          textAlign: "center",
          fontWeight: "500"
        }}>Secure & Ad-Free</div>
      </div>
    </div>
  );
}

export default Flipbook;
