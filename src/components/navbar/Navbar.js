import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import logo from "../images/logo.jpg";

const Navbar = () => {

    const [clicked, setClicked] = useState(false);
    const menuList = MenuList.map(({ url, title }, index) => {
        return(
            <li key={index}>
                <NavLink to={url}>
                    {title}
                </NavLink>
            </li>
        )
    });

    const HandleClick = () =>{
        setClicked(!clicked);
    }

    return(
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="menu-icon" onClick={HandleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
        </nav>
    )
};

export default Navbar;