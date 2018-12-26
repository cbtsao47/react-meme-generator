import React from "react";

function Header() {
  const name = "User";
  const hours = new Date().getHours();
  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }
  return <header className="navbar">{`Good ${timeOfDay}, ${name}`}</header>;
}

export default Header;
