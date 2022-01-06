import React, { useState } from "react";
import { MapboxSeach } from "../mapbox-search";
export function Form() {
  const [formData, setFormData] = useState({});
  function submitHandler(e) {
    e.preventDefault();
    const allData = {
      formData,
      texto: e.target["un-texto"].value,
    };
    console.log(allData);
  }
  function handleMapboxChange(data) {
    // voy agregando data al state interno del form
    setFormData({
      ...formData,
      mapbox: data,
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <div>Un texto</div>
        <input type="text" name="un-texto" />
      </label>
      <MapboxSeach onChange={handleMapboxChange} />
      <div style={{ marginTop: 30 }}>
        <button>Enviar</button>
      </div>
    </form>
  );
}
