import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import fotoDentista from "../images/doctor.jpg";

const Detail = () => {
  const { theme } = useContext(ContextGlobal);
  const [dentista, setDentista] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const getDentista = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const data = await res.json();
    setDentista(data);
  };

  useEffect(() => {
    getDentista();
  });

  const addFav = () => {
    const localData = localStorage.getItem("favs");

    if (localData) {
      const existingFavs = JSON.parse(localData) || [];
      const dentistaEncontrado = existingFavs.some(
        (dentistaBuscado) => dentistaBuscado.id === dentista.id
      );
      if (!dentistaEncontrado) {
        existingFavs.push(dentista);
        alert(`Dentista id ${dentista.id} agregado a Favoritos.`);
        return localStorage.setItem("favs", JSON.stringify(existingFavs));
      } else {
        return alert("Dentista ya agregado a Favoritos.");
      }
    } else {
      localStorage.setItem("favs", JSON.stringify([dentista]));
      alert(`Dentista id ${dentista.id} agregado a Favoritos.`);
    }
  };

  return (
    <div style={{ color: theme.color, background: theme.background }}>
      <h1>Dentista id {dentista.id} </h1>
      <div className="container">
        <div className="card">
          <img src={fotoDentista} alt="Foto dentista" />
          <h4>{dentista.name}</h4>
          <p>{dentista.email}</p>
          <p>{dentista.phone}</p>
          <h5>{dentista.website}</h5>

          <button
            onClick={addFav}
            className="favButton"
            style={{ color: theme.color }}
          >
            Agregar a favoritos
          </button>
          <button
            onClick={() => navigate(-1)}
            className="favButton"
            style={{ color: theme.color, background: theme.background }}
          >
            ⬅ Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
