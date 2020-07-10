import React from 'react';
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
    const link = {
        padding: '0 10px'
    }
    return (
        <ul>
            <NavLink to="/" style={link}>Home</NavLink>
            <NavLink to="/add" style={link}>New Question</NavLink>
            <NavLink to="/leaderboard" style={link}>Leader Board</NavLink>
        </ul>
    );
}

export default HeaderNav;