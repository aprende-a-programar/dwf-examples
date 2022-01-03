import React, { useState, useEffect } from "react";
import { useUserEmail } from "hooks/hooks";
import { checkEmail } from "lib/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useUserEmail();
  // alternativa podriamos usar este hook
  // pero es un camino más largo y no es necesario
  // ya que esta acción es una transacción
  // que no tiene efectos en algo posterior,
  // lo único que genera es un redirect
  // entonces no es necesario guardar ninguna data

  // const { data, checkUserEmail } = useCheckEmail();
  // useEffect(() => {
  //   if (data?.exists) {
  //     navigate("/login/password");
  //   }
  // }, [data]);

  // este es el camino más corto
  async function submitHandler(e) {
    e.preventDefault();
    const email = e.target.email.value;
    // uso un atomo para recuperarlo en la siguiente pantalla
    setUserEmail(email);
    const response = await checkEmail(email);
    if (response.exists) {
      navigate("/login/password");
    } else {
      navigate("/login/profile-data");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="email" name="email" />
      <button>Ingresar</button>
    </form>
  );
}

export { Login };
