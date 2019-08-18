import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Google Book Search <i class="fas fa-book"></i></h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-light text-black">Search Books</button></a>
                    </li>

                    <li className="nav-item" id="s">
                        <a className="nav-link" href="/savedbook"><button type="button" className="btn btn-light text-black">Saved Books</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;