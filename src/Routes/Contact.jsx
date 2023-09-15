import React, { useState, useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Form from "../Components/Form";

const Contact = () => {
  const { theme } = useContext(ContextGlobal);

  const [datos, setDatos] = useState({});
  const [showOk, setShowOk] = useState(false);
  const [showError, setShowError] = useState(false);

  const enviarDatos = (datos) => {
    setDatos(datos);
    setShowOk(true);
    setShowError(false);
  };

  return (
    <div
      style={{ color: theme.color, background: theme.background }}
      className="card-grid"
    >
      <Form
        onEnviarDatos={enviarDatos}
        setShowOk={setShowOk}
        setShowError={setShowError}
        showError={showError}
        showOk={showOk}
        datos={datos}
      />
    </div>
  );
};

export default Contact;
