import React, { useEffect, useState } from 'react'
import { IoIosMenu,IoIosClose  } from "react-icons/io";
import { links } from '../data';
import { Link ,NavLink,useNavigate} from "react-router-dom";
import './navbar.css';
const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
    const navigate=useNavigate();
    const handleNavToggle = () => {
        return setIsNavShowing((prevVAlue) => {
            return !prevVAlue;
        });
    };
    const logout=()=>{
        localStorage.removeItem('userInfo');
        navigate('/login');
    }
    useEffect(() => { console.log(links) }, []);
    return (
        <nav>
            <div className="container nav__container">
                <Link href="/" className="logo" onClick={handleNavToggle} style={{ visibility: "hidden" }}>
                    <img alt="Nav-logo" />
                </Link>
                <ul
                    className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
                >
                    {/* Destructure the links array of object from the links to get each item */}
                    {links.map(({ name, path }, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) => (isActive ? "active-nav" : "")}
                                    onClick={handleNavToggle}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        );
                    })}
                    <li onClick={logout} style={{cursor:'pointer'}}>Logout</li>
                </ul>
                <button onClick={handleNavToggle} className="nav__toggle-btn">
                    {isNavShowing ? <IoIosClose /> : <IoIosMenu  />}
                </button>
            </div>
        </nav>

    )
}

export default Navbar
