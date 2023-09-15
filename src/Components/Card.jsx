import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import fotoDentista from "../images/doctor.jpg";

const Card = ({ dentista }) => {
  const { theme } = useContext(ContextGlobal);

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
    <Link key={dentista.id} to={`/dentist/${dentista.id}`}>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <div
        className="card"
        style={{ color: theme.color, background: theme.background }}
      >
        <h4>{dentista.id}</h4>
        <img src={fotoDentista} alt="Foto dentista" />
        <h4>{dentista.name}</h4>
        <h3>{dentista.username}</h3>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button
          onClick={addFav}
          className="favButton"
          style={{ color: theme.color }}
        >
          Agregar a favoritos
        </button>
      </div>
    </Link>
  );
};

export default Card;
