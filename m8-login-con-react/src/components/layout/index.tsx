import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const padd = { padding: 20 };

function Layout() {
  return (
    <div>
      <header style={{ ...padd, border: "solid 2px" }}>El header</header>
      <div style={padd}>
        <Outlet />
      </div>
      <footer style={{ ...padd, border: "solid 2px" }}>El footer</footer>
    </div>
  );
}

export { Layout };
