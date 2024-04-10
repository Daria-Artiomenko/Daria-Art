import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-frontend">Frontend React <br/>Developer</div>
                    
                    <nav className="header-navigation">
                        <ul className="header-navigation-items"> 
                            <li className="header-navigation-item"><a href="#">Home</a></li>
                            <li className="header-navigation-item"><a href="#about">About</a></li>
                            <li className="header-navigation-item"><a href="#projects">Projects</a></li>
                            <li className="header-navigation-item"><a href="#">Contacts</a></li>
                            <li className="header-navigation-item"><a href="#">CV</a></li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    )
}
export default Header;