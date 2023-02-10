import React from "react";
import profileLogo from "../Media/profile_logo.jpg";
import "../styles/Nav.css";

function Nav() {
  const [show, handleShow] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="netflix-logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="netflix-logo"
      ></img>
      <div>
        <img
          className="netflix-account-logo"
          src={profileLogo}
          alt="netflix-progfile-logo"
        ></img>
      </div>
    </div>
  );
}

export default Nav;
