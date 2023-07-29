import React, {useState} from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    
    return (
        <header>
            <h1>Bashi.com</h1>
            <div className="burger-menu" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* ドロワーメニューのコード */}
            {isMenuOpen && (
                <div className="drawer-menu">
                    <nav>
                        <a href="#activity" onClick={toggleMenu}>Activity</a>
                        <a href="#schedule" onClick={toggleMenu}>Schedule</a>
                        <a href="#works" onClick={toggleMenu}>Works</a>
                    </nav>
                </div>
            )}
			
            <nav className="header-menu">
                <a href="#activity">Activity</a>
                <a href="#schedule">Schedule</a>
                <a href="#works">Works</a>
            </nav> 
        </header>
    );
};

export default Header;
