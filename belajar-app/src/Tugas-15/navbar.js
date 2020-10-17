import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div class="tugas15navbar">
            <Link to="/">Home</Link>
            <Link to="/tugas-10">Tugas 10</Link>
            <Link to="/tugas-11">Tugas 11</Link>
            <Link to="/tugas-12">Tugas 12</Link>
            <Link to="/tugas-13">Tugas 13</Link>
            <Link to="/tugas-14">Tugas 14</Link>
        </div>
    );
};

export default Navbar;
