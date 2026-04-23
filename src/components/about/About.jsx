import "./About.css"

function About() {

    return (
        <div className="about">
            <a href="/" className="logo-about">
                <img className="logoImg" src="logo.png" alt="logo" />
            </a>

            <h2 className="about-h2">About Us</h2>
            <div className="chiziq"></div>

            <div className="stGroup">
                <h1>We Invite You to Visit Our Coffe House</h1>
                <p className="p-st">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque eligendi dolores neque id inventore nesciunt a natus voluptatem! Voluptatem ab nisi, cupiditate aperiam quisquam!</p>
                <button className="btn-st">READ MORE</button>
            </div>

            <div className="imgGroup">
                <img src="chef.webp" className="img1G" />
            </div>
            <div className="imgGroup">
                <img src="ffofood.jpg" className="img2G" />
            </div>

            <div className="ndParentGroup">
                <div className="ndGroup">
                    <h1>Quality Kava Beans</h1>
                    <p className="p-st">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque eligendi dolores neque id inventore nesciunt a natus voluptatem! Voluptatem ab nisi, cupiditate aperiam quisquam!</p>
                    <button className="btn-st">READ MORE</button>
                </div>
            </div>

            <div className="rtGroup">
                <h1>Use the Tips & Recipes of Our Barista</h1>
                <p className="p-st">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque eligendi dolores neque id inventore nesciunt a natus voluptatem! Voluptatem ab nisi, cupiditate aperiam quisquam!</p>
                <button className="btn-st">READ MORE</button>
            </div>

            <div className="imgGroup">
                <img src="team.jpg" className="img3G" />
            </div>
        </div>
    )
}

export default About;