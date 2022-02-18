import './App.css';

import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Location App</h1>
      <p>By - Juan G. Gómez</p>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}
