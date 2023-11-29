import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    dispatch({ type: "ADD_FAVORITE", payload: { id, name, username } });
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <p>{name}</p>
        <p>{username}</p>
        <p>{id}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    </div>
  );
};

export default Card;
