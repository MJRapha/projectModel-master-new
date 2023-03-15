import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { BiJoystick, BiBasket } from "react-icons/bi";
import css from './TopNav.module.scss'
import { IsActiveProps } from "../../@types/types";

// yarn add react-bootstrap
const TopNav = () => {
    const activeClass = (e: IsActiveProps, clz: string = "") =>
        e.isActive ? `${css.active} ${clz}` : clz;
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <nav className={css.navWrapper}>
                    {/* Brand: Logo + App Name */}
                    <NavLink to="/" className={activeClass}>
                        <span className="me-auto">Gaming Shop</span>
                        &nbsp;
                        <BiJoystick />
                    </NavLink>
                    {/* Burger: */}
                    <Navbar.Toggle className="dropdown" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={activeClass} to="/games">Games</NavLink>
                            <NavLink className={activeClass} to="/about">About</NavLink>
                            <NavLink className={activeClass} to="/contact">Contact</NavLink>
                            <NavLink className={activeClass} to="/buying-basket">
                                <BiBasket />
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </nav>
            </Container>
        </Navbar>
    );
};

export default TopNav;

