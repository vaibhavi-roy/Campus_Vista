import React from "react";
import "./Navbar.css";
import navbarItems from "./NavbarItems";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "./mainlogo.png"
import User from "./user.png";

const Navbar = ({ toggle }) => {
    return (
        <nav>

            <Link to="/" className="link">
                <img class="main-logo" src={Logo} alt="" />
            </Link>
            <div className="menu-items">
                {navbarItems.map((item, index) => (
                    <Link className="link" to={item.link} key={index}>
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className="icons">

                <div className="mobile-menu-icon">
                    <FaBars onClick={toggle} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
