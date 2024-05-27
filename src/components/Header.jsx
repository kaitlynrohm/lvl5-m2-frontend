import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="header">
      <h4 className="header-title">Turners Cars</h4>
      <ul className="link-list">
        <li>Cars</li>
        <li>Subscription</li>
        <li>Login</li>
        <li>Search</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/quote-calc">Quote Calc</Link>
        </li>
        <li>
          <Link to="/car-value-calc">Car Value Calc</Link>
        </li>
        <li>
          <Link to="/risk-rating-calc">Risk Rating Calc</Link>
        </li>
      </ul>
    </div>
  );
}
