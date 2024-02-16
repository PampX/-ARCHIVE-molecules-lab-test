import React, { useState } from 'react';
import '../utils/css/header.css';
import phone from '../images/header/phone.png';
import logo from '../images/header/logo.png';
import { Link } from 'react-router-dom';
import imgLiposome from '../images/home/expert-img.png'
import logoBlanc from '../images/general/Logo-blanc.png'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='header-div-container'>
            <div className='header-div-phone'>
                <img className='header-img-phone' src={phone} alt='icone de téléphone' />
                <p className='header-p-phone'>+33 (0)4 99 78 08 11</p>
            </div>
            <div className='header-div-menu'>
                <Link to='/' className='header-p-menu'>HOME</Link>
                <Link to='/'>
                    <img className='header-img-menu' alt='logo' src={logo} />
                </Link>
                <Link to='/produits' className='header-p-menu quandMeme'>NOS PRODUITS</Link>
                {!isMenuOpen && (
                    <svg className='svg-header-menu' onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30">
                        <g fill="currentColor">
                            <rect width="40" height="5"></rect>
                            <rect y="12.5" width="40" height="5"></rect>
                            <rect y="25" width="40" height="5"></rect>
                        </g>
                    </svg>
                )}
            </div>
            {isMenuOpen && (
                <div className="menu-burger">
                    <svg className='svg-close-menu' onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                        <g fill="none" stroke="black" stroke-width="5">
                            <line x1="10" y1="10" x2="30" y2="30" />
                            <line x1="30" y1="10" x2="10" y2="30" />
                        </g>
                    </svg>
                    <div className='container-menu-link'>
                        <Link className='item-menu' to='/' onClick={toggleMenu}>HOME</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="1" viewBox="0 0 30 1">
                            <rect width="30" height="1" fill="black" />
                        </svg>
                        <Link className='item-menu' to='/produits' onClick={toggleMenu}>NOS PRODUITS</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="1" viewBox="0 0 30 1">
                            <rect width="30" height="1" fill="black" />
                        </svg>
                        <Link className='item-menu' to='/point_de_vente' onClick={toggleMenu}>LES POINTS DE VENTES</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="1" viewBox="0 0 30 1">
                            <rect width="30" height="1" fill="black" />
                        </svg>
                    </div>
                    <img className='img-menu-liposome' src={imgLiposome}/>
                    <div className='header-menu-bottom'>
                        <img src={logoBlanc}/>
                        <p className='text-menu-bottom'>+33 (0)4 99 78 08 11</p>
                        <p className='text-menu-bottom'>contact@molecules-lab.fr</p>
                    </div>
                </div>
            )}
        </div>
    );
}
