import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {
    state: { theme, data },
  } = useContext(ContextGlobal);

  const favsStyles = {
    backgroundColor: theme === "dark" ? "#333" : "#f4f4f4",
    color: theme === "dark" ? "#fff" : "#333",
    padding: "20px",
  };

  return (
    <div style={favsStyles}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {data.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
