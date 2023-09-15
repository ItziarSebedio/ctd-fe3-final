import React, { useContext, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const existingFavs = JSON.parse(localStorage.getItem("favs")) || [];
  const { theme } = useContext(ContextGlobal);
  const [showFavoritos, setShowFavoritos] = useState(existingFavs.length > 0);

  const removeFav = () => {
    localStorage.removeItem("favs");
    setShowFavoritos(false);
  };

  return (
    <div style={{ color: theme.color, background: theme.background }}>
      <h1>Tus dentistas favoritos</h1>
      {showFavoritos && (
        <button
          onClick={removeFav}
          className="favButton"
          style={{ color: theme.color, background: theme.background }}
        >
          [ Borrar favoritos ]{" "}
        </button>
      )}
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {showFavoritos &&
          existingFavs.map((dentista) => (
            <Card key={dentista.id} dentista={dentista} />
          ))}
      </div>
    </div>
  );
};

export default Favs;
