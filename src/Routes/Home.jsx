import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Home = () => {
  const { data, theme } = useContext(ContextGlobal);

  return (
    <main
      className="App"
      style={{ color: theme.color, background: theme.background }}
    >
      <h1>Nuestro equipo</h1>
      <div className="card-grid">
        {data.length
          ? data.map((dentista) => (
              <Card key={dentista.id} dentista={dentista} />
            ))
          : null}
      </div>
    </main>
  );
};

export default Home;
