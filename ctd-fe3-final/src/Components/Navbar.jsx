import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const {
    state: { theme },
    changeTheme,
  } = useContext(ContextGlobal);

  const handleThemeChange = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };

  const containerStyle = {
    width: "100%",
    backgroundColor: theme === "dark" ? "#333" : "#f4f4f4",
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    marginLeft: "0",
    paddingLeft: "0",
    marginInlineStart: "0",
    marginInlineEnd: "0",
    width: "100%",
    justifyContent: "flex-end",
    marginRight: "20px", // Espacio entre los enlaces y el botón
  };

  const linkStyle = {
    textDecoration: "none",
    color: theme === "dark" ? "#fff" : "#333",
  };

  const buttonStyle = {
    marginLeft: "20px",
  };

  const brandStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoDStyle = {
    color: "red",
    marginRight: "5px",
  };

  return (
    <div style={containerStyle}>
      <div style={brandStyle}>
        <span style={logoDStyle}>D</span>H Odonto
      </div>
      <nav>
        <ul style={ulStyle}>
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/favs" style={linkStyle}>
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={handleThemeChange} style={buttonStyle}>
        Change theme
      </button>
    </div>
  );
};

export default Navbar;
