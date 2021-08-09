import React from 'react';
import Button from './Button';

class NavMenu extends React.Component {
    render() {
        return (
            <header>
                <nav>
                <ul>
                    <li class="nav_links"><a href="#">Work</a></li>
                    <li class="nav_links"><a href="#">About</a></li>
                    <li class="nav_links"><a href="#">Resume</a></li>
                </ul>
                
            </nav>
            <Button text="Contact" />
        </header>
            
        )
    }

    
}

export default NavMenu;