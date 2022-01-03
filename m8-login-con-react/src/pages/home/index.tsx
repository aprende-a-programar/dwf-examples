import React from "react";
import { Login } from "components/login";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export { HomePage };
