import React from "react";

const Footer = () => {
  const containerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    position: "fixed",
    bottom: 0,
    left: 0,
  };

  const redStripeStyle = {
    width: "100%",
    height: "20px",
    backgroundColor: "red",
    textAlign: "center",
    zIndex: "1",
  };

  const visitText = {
    fontSize: "12px",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    position: "absolute",
    top: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "red",
  };

  const iconsContainerStyle = {
    display: "flex",
    gap: "10px",
    position: "relative",
    zIndex: "0",
  };

  const iconStyle = {
    width: "30px",
    height: "auto",
    filter: "invert(100%)",
  };

  const logoStyle = {
    width: "200px",
    height: "auto",
    marginRight: "40px",
  };

  return (
    <div style={containerStyle}>
      <div style={redStripeStyle}>
        <p style={visitText}>Visitar a otros</p>
      </div>
      <div style={iconsContainerStyle}>
        <img src="/public/images/DH.png" alt="DH-logo" style={logoStyle} />
        <img
          src="/public/images/ico-facebook.png"
          alt="facebook"
          style={iconStyle}
        />
        <img
          src="/public/images/ico-instagram.png"
          alt="instagram"
          style={iconStyle}
        />
        <img
          src="/public/images/ico-tiktok.png"
          alt="tiktok"
          style={iconStyle}
        />
        <img
          src="/public/images/ico-whatsapp.png"
          alt="whatsapp"
          style={iconStyle}
        />
      </div>
    </div>
  );
};

export default Footer;
