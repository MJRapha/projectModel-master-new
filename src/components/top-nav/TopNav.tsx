import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { BiJoystick } from "react-icons/bi";
import css from './TopNav.module.scss'
import { IsActiveProps } from "../../@types/types";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const TopNav = () => {
    const { openCart, cartQuantity } = useShoppingCart()
    const activeClass = (e: IsActiveProps, clz: string = "") =>
        e.isActive ? `${css.active} ${clz}` : clz;
    return (
        <Navbar sticky="top" bg="dark" expand="lg">
            <Container>
                <nav className={css.navWrapper}>
                    <NavLink to="/" className={activeClass}>
                        <span className="me-auto">Gaming Shop</span>
                        &nbsp;
                        <BiJoystick />
                    </NavLink>
                    <Navbar.Toggle className="dropdown" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={activeClass} to="/games">Games</NavLink>
                            <NavLink className={activeClass} to="/about">About</NavLink>
                            <NavLink className={activeClass} to="/contact">Contact</NavLink>
                        </Nav>

                        <Button
                            onClick={openCart}
                            style={{ width: "3rem", height: "3rem", position: "relative" }}
                            variant="outline-primary"
                            className="rounded-circle">
                            {/* svg for a cart icon */}
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M4.85795 8.84661C4.93811 7.80461 5.80699 7 6.85206 7H17.1479C18.193 7 19.0619 7.80461 19.142 8.84661L19.6687 15.6932C19.8474 18.0164 18.0105 20 15.6805 20H8.31951C5.98947 20 4.15259 18.0164 4.33129 15.6932L4.85795 8.84661Z" stroke="#fdfcfc" strokeWidth="2"></path>
                                    <path d="M15 11V6C15 4.34315 13.6569 3 12 3V3C10.3431 3 9 4.34315 9 6V11" stroke="#fdfcfc" strokeWidth="2" strokeLinecap="round"></path>
                                </g>
                            </svg>
                            {/* Inticator that telling how many items are in the cart */}
                            {cartQuantity > 0 && (
                                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{
                                    color: "white",
                                    width: "1.5rem",
                                    height: "1.5rem",
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    transform: "translate(25%, 25%)"
                                }}
                                >
                                    {cartQuantity}
                                </div>
                            )}
                        </Button>

                    </Navbar.Collapse>
                </nav>
            </Container>
        </Navbar>
    );
};

export default TopNav;

