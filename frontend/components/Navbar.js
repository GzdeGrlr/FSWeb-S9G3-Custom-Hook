import React from "react";

const Navbar = (props) => {
  const toggleMode = (e) => {
    e.preventDefault();
    props.setGeceModuAc(!props.geceModuAc);
  };

  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.geceModuAc ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
