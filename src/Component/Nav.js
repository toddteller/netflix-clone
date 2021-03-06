import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      /> <h3 className="mytext">Developed By Giovanni Aiello</h3>
      <img
        className="nav__avatar"
        src="https://i2.sndcdn.com/avatars-000523322028-uw9xhn-t500x500.jpg"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
