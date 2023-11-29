import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {
    state: { theme },
  } = useContext(ContextGlobal);
  const [dentistInfo, setDentistInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchDentisInfo = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/${id}"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setDentistInfo(data);
      } catch (error) {
        console.error("Error fetching dentist info:", error);
      }
    };

    fetchDentisInfo();
  }, [id]);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const detailStyles = {
    backgroundColor: them === "dark" ? "#333" : "#f4f4f4",
    color: theme === "dark" ? "#fff" : "#333",
    padding: "20px",
  };

  return (
    <div style={detailStyles}>
      <h1>Detail Dentist {id} </h1>
      <div>
        <p>Name: {dentistInfo.name}</p>
        <p>Email: {dentistInfo.email}</p>
        <p>Phone: {dentistInfo.phone}</p>
        <p>Website: {dentistInfo.website}</p>
      </div>
    </div>
  );
};

export default Detail;
