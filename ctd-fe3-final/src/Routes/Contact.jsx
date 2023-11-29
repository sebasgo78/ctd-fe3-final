import React, { useContext } from "react";
import Form from "../Components/Form";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {
    state: { theme },
  } = useContext(ContextGlobal);

  const contactStyles = {
    backgroundColor: theme === "dark" ? "#333" : "#f4f4f4",
    color: theme === "dark" ? "#fff" : "#333",
    padding: "20px",
  };

  return (
    <div style={contactStyles}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
