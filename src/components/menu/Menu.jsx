import "./Menu.css"

function Menu() {

    return (
        <div className="menu">
            <a href="/" className="logo-about">
                <img className="logoImg" src="logo.png" alt="logo" />
            </a>
            <h1 className="topic-menu">Food Menus</h1>
            <div className="line-menu"></div>

            <div className="menuContainer">
                <div className="pizza">
                    <img src="shroom.jpg" className="shroom" />
                    <b className="name">Shroom Bacon Burger</b>
                    <div className="price1">$11.76</div>
                </div>
                <div className="pizza">
                    <img src="coffe.jpg" className="shroom" />
                    <b className="name">Delicious Black Coffe</b>
                    <div className="price1">$11.76</div>
                </div>
                <div className="pizza">
                    <img src="burger.jpg" className="shroom" />
                    <b className="name">BBQ Chicken Pizza New</b>
                    <div className="price1">$13.17</div>
                </div>
                <div className="pizza">
                    <img src="blackburger.jpg" className="shroom" />
                    <b className="name">Black Pepper Burger</b>
                    <div className="price1">$10.85</div>
                </div>
                <div className="pizza">
                    <img src="chicken.jpg" className="shroom" />
                    <b className="name">Crispy Fried Chicken</b>
                    <div className="price1">$15.10</div>
                </div>
                <div className="pizza">
                    <img src="pizza.jpg" className="shroom" />
                    <b className="name">Margherita Pizza New</b>
                    <div className="price1">$15.80</div>
                </div>
            </div>
        </div>
    )
}

export default Menu;