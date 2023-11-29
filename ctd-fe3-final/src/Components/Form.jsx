import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSumit = (e) => {
    e.preventDefault();

    if (FormData.fullName.length <= 5 || !FormDataEvent.email.includes("@")) {
      setFormError("Por favor verifique su información nuevamente");
    } else {
      console.log("Formulario enviado", formDate);
      setFormError("");
    }
  };

  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form onSubmit={handleSumit}>
        <div>
          <label htmlFor="fullName">Nombre Completo:</label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {formError && <p>{formError}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
