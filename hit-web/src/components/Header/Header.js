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
                <div className={`drawer-menu ${isMenuOpen ? 'open' : ''}`}>
                    <nav>
                        <a href="#intro" onClick={toggleMenu}>Introduction</a>
                        <a href="#works" onClick={toggleMenu}>Works</a>
                    </nav>
                </div>
            
			
            <nav className="header-menu">
                <a href="#intro">Introduction</a>
                <a href="#works">Works</a>
            </nav> 
        </header>
    );
};

export default Header;
