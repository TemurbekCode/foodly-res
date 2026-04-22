import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeAll = () => {
        setMenuOpen(false);
    };

    return (
        <div className="header">
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
                        <Link to="/about" className="nav-link" onClick={closeAll}>About</Link>
                        <Link to="/menu" className="nav-link" onClick={closeAll}>Menu</Link>
                    </div>

                    {/* RIGHT */}
                    <div className="nav-right">
                        <button className="btn1">🧺°</button>
                        <button className="btn2">Contact Us</button>
                    </div>

                    {/* BURGER */}
                    <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </div>
                </div>
            </nav>

            <header>
                <div className="left-head">
                    <div className="texts">
                        <h1 className="h1-head">The Perfect Space to</h1>
                        <h1 className="h1-head2">Enjoy Fantastic Food</h1><br />
                        <p className="p-head">Festing dining at Farthings where we are strong believers in using the very best produce</p><br /><br />
                        <button className="btn-head">See Our Menus</button>
                        <div className="circle">
                            ▶
                        </div>
                    </div>
                </div>

                <div className="right-head">
                    <div className="img11">
                        <img className="img-head" src="foodd.jpg" alt="" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;