import React, { useState } from 'react';

const Navbar = (props) => {
  const toggleMode = e => {
    // console.log("Click - darkMode before setDarkmode: ",props.darkMode) //MSW
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
    // console.log("Click - darkMode after setDarkmode: ",props.darkMode) //MSW

  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
