import React, { useState, useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Form = ({
  onEnviarDatos,
  setShowOk,
  setShowError,
  showError,
  showOk,
  datos,
}) => {
  const { theme } = useContext(ContextGlobal);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.length > 5 &&
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      console.log(nombre, email);
      onEnviarDatos({ nombre, email });
      setNombre("");
      setEmail("");
    } else {
      setShowError(true);
      setShowOk(false);
      setNombre("");
      setEmail("");
    }
  };

  return (
    <div>
      <h1>¿Querés saber más?</h1>
      <p>Envianos tus datos y nos pondremos en contacto.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresá tu nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Ingresá tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button
          type="submit"
          className="favButton"
          style={{ color: theme.color }}
        >
          Enviar datos
        </button>
      </form>

      {showError && (
        <h5 style={{ color: "red", background: theme.background }}>
          Por favor chequeá que la información sea correcta.
        </h5>
      )}
      {showOk && (
        <h5>Gracias {datos.nombre}, te contactaremos a la brevedad.</h5>
      )}
    </div>
  );
};

export default Form;
