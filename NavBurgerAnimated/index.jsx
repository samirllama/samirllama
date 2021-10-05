import { useState } from "react";
import { Circle } from "./CircleIcon";
import "./styles.scss";
import classnames from "classnames";

const NavBurger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh", boxSizing: "border-box" }}>
      <nav className="nav">
        <div
          className={classnames("hamburger", { open })}
          onClick={() => setOpen(!open)}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
        <ul className={classnames("nav-links", { open })}>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/home/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section className="landing">
        <Circle />
      </section>
    </div>
  );
};

export default NavBurger;
