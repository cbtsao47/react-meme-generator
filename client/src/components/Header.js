import React from "react";

function Header() {
  return (
    <header className="header">
      <img
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="troll face"
        className="header__logo"
      />
      <h1 className="header__title">Meme of the day</h1>
    </header>
  );
}

export default Header;
