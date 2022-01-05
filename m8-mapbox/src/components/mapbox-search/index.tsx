import React, { useState } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiemFwYWlhZGV2IiwiYSI6ImNreTF1cnZ5YTBlcWMyd3NjbGhxcnV6ZmkifQ.ZmsUrIAbUSkznfj8e97tmQ",
});

const boxStyles = {
  padding: 10,
  fontSize: 20,
};

function MapboxSeach() {
  const [query, setQuery] = useState("");
  // lo seteo any porque la prop "center" de Map se queja
  const initialCoords: any = [-0.481747846041145, 51.3233379650232];
  const [coords, setCoords] = useState(initialCoords);

  async function search() {
    // esta API la saqué de por ahi
    const data = await fetch(
      `https://us1.locationiq.com/v1/search.php?key=pk.bf4604bc2b3ea328e732de26a4387fa9&q=${query}&format=json`
    ).then((r) => r.json());
    console.log(data);
    const lat = parseFloat(data[0].lat);
    const lon = parseFloat(data[0].lon);
    const newCoords = [lon, lat];
    setCoords(newCoords);
  }

  function onChange(e) {
    setQuery(e.target.value);
  }

  function onKeyDown(e) {
    // si no es con form, tengo que agregar esto
    if (e.key == "Enter") {
      search();
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={query}
          style={boxStyles}
        />
        <button style={boxStyles} onClick={search}>
          Buscar
        </button>
      </div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "500px",
          width: "500px",
        }}
        zoom={[15]}
        center={coords}
        movingMethod="easeTo"
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={coords} />
        </Layer>
      </Map>
    </div>
  );
}

export { MapboxSeach };