import React from 'react';
import { NavLink } from "react-router-dom";
import {routes} from "../routes/routes";

const NavBar = () => {
    return (
        <div>
            <nav>
                <div>
                    <h1>
                        <NavLink to={routes.home}>Food Ninja</NavLink>
                    </h1>
                </div>
                <ul>
                    <li>
                        <NavLink to={routes.home}>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={routes.about}>
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={routes.contact}>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
