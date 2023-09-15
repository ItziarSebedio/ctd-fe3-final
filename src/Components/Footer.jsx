import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Footer = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <footer style={{ color: theme.background, background: theme.color }}>
      <h5>Made with ♡ by Itziar</h5>
    </footer>
  );
};

export default Footer;
