import React from "react";
import SearchBar from "./SearchBar"
import stylesNav from "./Nav.module.css"
import stylesButton from "./SearchBar.module.css"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav(props) {

    const location = useLocation();

    if (location.pathname === "/") { return }

    return (
        <>
            <nav className={stylesNav.nav}>
                <Link to="./favorites">
                    <p className={stylesButton.buttonFav}>My favorites</p>
                </Link>
                <Link to="./home">
                    <p className={stylesButton.buttonHome}>Home</p>
                </Link>
                <Link to="./about">
                    <p className={stylesButton.buttonHome}>About</p>
                </Link>
                <SearchBar onSearch={props.onSearch} />
                <button onClick={() => { props.onRandom() }} className={stylesButton.buttonAgregar}>Random</button>

            </nav>
        </>
    );
}