import React, { useState, useEffect } from "react";
import { useUserEmail, useAuth } from "hooks/hooks";
import { useNavigate } from "react-router-dom";

function Password() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useUserEmail();
  const { login } = useAuth();

  async function submitHandler(e) {
    e.preventDefault();
    const password = e.target.password.value;
    const authRes = await login(userEmail, password);
    if (authRes) {
      console.log("login correcto");
      navigate("/login/success");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      Tu email es: {userEmail}, ingresá tu password:
      <input type="password" name="password" />
      <button>Ingresar</button>
    </form>
  );
}

export { Password };
