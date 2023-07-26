import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Bashi.com</h1>
            {/* その他に、ナビゲーションリンクなどをここに追加できます。 */}
			<nav>
                <a href="#activity">Activity</a>
                <a href="#works">Works</a>
                <a href="#blog">Blog</a>
            </nav>
        </header>
    );
};

export default Header;
