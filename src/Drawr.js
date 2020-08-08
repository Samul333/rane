import "./index.css";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";

import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function Drawr() {
  return (
    <div className="drawer">
         <div className="left">
        <img src="https://ranenetwork.com/wp-content/themes/rane/img/logo.png" />
      </div>
         <div className="right">
        <Navbar>
          <NavItem icon={<CaretIcon />}>
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </Navbar>
      </div>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>Join Today</DropdownItem>

          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Products
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals"
          >
            Solutions
          </DropdownItem>

          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="about"
          >
            Abouts
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Products</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Risk Intelligence</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Risk Monitoring</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Network Security</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>
            Expert Marketplace
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Solutions</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Legal Regulatory Compliance</DropdownItem>
          <DropdownItem leftIcon="🐸">Security + Safety</DropdownItem>
          <DropdownItem leftIcon="🦋">Cyber Information</DropdownItem>
          <DropdownItem leftIcon="🦔">Gelopolitical Threat</DropdownItem>
          <DropdownItem leftIcon="🦔">Operational Risk</DropdownItem>
          <DropdownItem leftIcon="🦔">Risk Experts</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "about"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>About</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Our Story</DropdownItem>
          <DropdownItem leftIcon="🐸">Our Communication</DropdownItem>
          <DropdownItem leftIcon="🦋">LeaderShip</DropdownItem>
          <DropdownItem leftIcon="🦔">Events</DropdownItem>
          <DropdownItem leftIcon="🦔">News + Insight</DropdownItem>
          <DropdownItem leftIcon="🦔">Careers</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Drawr;
