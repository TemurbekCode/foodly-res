import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react;"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeAll = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navContainer">

                {/* LOGO */}
                <Link to="/" className="logo" onClick={closeAll}>
                    <img className="logoImg" src="/logo.png" alt="logo" />
                    <span className="r-span">Foodly</span>
                </Link>

                {/* MID */}
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <Link to="/" className="nav-link" onClick={closeAll}>Home</Link>
                    <Link to="/food" className="nav-link" onClick={closeAll}>Food</Link>
                    <Link to="/menu" className="nav-link" onClick={closeAll}>Menu</Link>
                    <Link to="/contact" className="nav-link" onClick={closeAll}>Contact</Link>
                </div>

                {/* RIGHT */}
                <div className="nav-right">
                    <button>EN</button>
                    <button>UZ</button>
                </div>

                {/* BURGER */}
                <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

            </div>
        </nav>
    );
}

export default Navbar;