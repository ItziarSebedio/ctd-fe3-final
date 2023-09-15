import "../index.css";
import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, handleDarkTheme, handleLightTheme } =
    useContext(ContextGlobal);

  function handleTheme() {
    if (theme.color === "midnightblue") return handleDarkTheme();
    if (theme.color === "white") return handleLightTheme();
  }

  return (
    <nav style={{ background: theme.color }}>
      <li>
        <Link to="/" style={{ color: theme.background }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/favs" style={{ color: theme.background }}>
          Favoritos
        </Link>
      </li>
      <li>
        <Link to="/contacto" style={{ color: theme.background }}>
          Contacto
        </Link>
      </li>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <li>
        <button
          className="favButton"
          onClick={handleTheme}
          style={{ color: theme.background }}
        >
          Cambiar modo
        </button>
      </li>
    </nav>
  );
};

export default Navbar;
