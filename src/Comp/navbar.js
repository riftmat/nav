import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import "../style/main.css"

function Navbar() {
    const navRef = useRef();

    const shownav = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return ( 
       <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">My work</a>
            <a href="/#">Projects</a>
            <a href="/#">About me</a>
            <button className="nav-btn nav-btn-close" onClick={shownav}>
                <FaTimes></FaTimes>
            </button>
        </nav>
        <button className='nav-btn' onClick={shownav}>
            <FaBars></FaBars>
        </button>
       </header>
    );
}

export default Navbar;