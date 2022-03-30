import React from "react";

function SideNav() {
  return (
    <nav className="nav flex-column align-items-start">
      <a className="nav-link active" aria-current="page" href="#work">
        Work
      </a>
      <a className="nav-link" href="#skills">
        Skills
      </a>
      <a className="nav-link" href="#about">
        About
      </a>
      <a className="nav-link" href="#contacts">
        Contacts
      </a>
    </nav>
  );
}

export default SideNav;
