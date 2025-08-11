import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div
      style={{
        fontSize: "10px",
      }}
    >
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyleType: "none",
            justifyContent: "flex-end",
            marginRight: "20px",
          }}
        >
          <li style={{ marginBottom: "12px" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ marginBottom: "12px" }}>
            <Link to="/about">About</Link>
          </li>
          <li style={{ marginBottom: "12px" }}>
            <Link to="/services">Services</Link>
          </li>
          <li style={{ marginBottom: "12px" }}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
