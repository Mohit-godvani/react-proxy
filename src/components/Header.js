import React from "react";

export const Header = ({ logout }) => {
  const headerStyle = {
    width: "100%",
    padding: "1%",
    backgroundColor: "#f87878",
    color: "white",
    textAlign: "right",
  };

  return (
    <div style={headerStyle}>
      <h1 style={{ cursor: "pointer" }} onClick={(e) => logout()}>
        <span role="img" aria-label="">
          &#128516;
        </span>
        <span>Logout</span>
      </h1>
    </div>
  );
};
